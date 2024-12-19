import { useCallback, useContext } from 'react';
import RCContext from '../context/RCInstance';
import {
  useUserStore,
  useChannelStore,
  useMemberStore,
  useMessageStore,
  useStarredMessageStore,
} from '../store';

const useFetchChatData = (showRoles) => {
  const { RCInstance, ECOptions } = useContext(RCContext);

  const setMemberRoles = useMemberStore((state) => state.setMemberRoles);
  const setMessages = useMessageStore((state) => state.setMessages);
  const currentMessages = useMessageStore((state) => state.messages);
  const setAdmins = useMemberStore((state) => state.setAdmins);
  const setStarredMessages = useStarredMessageStore(
    (state) => state.setStarredMessages
  );
  const isUserAuthenticated = useUserStore(
    (state) => state.isUserAuthenticated
  );
  const isChannelPrivate = useChannelStore((state) => state.isChannelPrivate);

  const getMessagesAndRoles = useCallback(
    async (anonymousMode) => {
      try {
        if (!isUserAuthenticated && !anonymousMode) return;

        const { messages } = await RCInstance.getMessages(
          anonymousMode,
          ECOptions?.enableThreads
            ? { query: { tmid: { $exists: false } } }
            : undefined,
          anonymousMode ? false : isChannelPrivate
        );

        if (messages) {
          setMessages(messages.filter((message) => message._hidden !== true));
        }

        if (!isUserAuthenticated) return;

        if (showRoles) {
          const { roles } = await RCInstance.getChannelRoles(isChannelPrivate);
          const fetchedAdmins = await RCInstance.getUsersInRole('admin');
          const adminUsernames = fetchedAdmins?.users?.map(
            (user) => user.username
          );
          setAdmins(adminUsernames);

          const rolesObj =
            roles?.length > 0
              ? roles.reduce(
                (obj, item) => ({ ...obj, [item.u.username]: item }),
                {}
              )
              : {};

          setMemberRoles(rolesObj);
        }
      } catch (e) {
        console.error(e);
      }
    },
    [
      isUserAuthenticated,
      RCInstance,
      ECOptions?.enableThreads,
      isChannelPrivate,
      showRoles,
      setMessages,
      setAdmins,
      setMemberRoles,
    ]
  );

  const getStarredMessages = useCallback(
    async (anonymousMode) => {
      if (!isUserAuthenticated && !anonymousMode) return;

      try {
        const { messages } = await RCInstance.getStarredMessages();
        setStarredMessages(messages);
      } catch (e) {
        console.error(e);
      }
    },
    [isUserAuthenticated, RCInstance, setStarredMessages]
  );

  const loadMoreMessages = useCallback(
    async (anonymousMode, offset) => {
      try {
        const { messages: newMessages } = await RCInstance.getMessages(
          anonymousMode,
          {
            query: ECOptions?.enableThreads
              ? { tmid: { $exists: false } }
              : undefined,
            offset,
          },
          anonymousMode ? false : isChannelPrivate
        );

        if (newMessages) {
          const existingMessages = currentMessages; // Retrieve existing messages
          const mergedMessages = [
            ...existingMessages,
            ...newMessages.filter((message) => message._hidden !== true),
          ];
          setMessages(mergedMessages); // Update the store with merged messages
        }
      } catch (e) {
        console.error(e);
      }
    },
    [
      RCInstance,
      ECOptions?.enableThreads,
      isChannelPrivate,
      currentMessages,
      setMessages,
    ]
  );

  return { getMessagesAndRoles, getStarredMessages, loadMoreMessages };
};

export default useFetchChatData;
