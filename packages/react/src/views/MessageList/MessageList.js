import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { isSameDay } from 'date-fns';
import { Box, Icon, Button, useTheme } from '@embeddedchat/ui-elements';
import { useMessageStore } from '../../store';
import MessageReportWindow from '../ReportMessage/MessageReportWindow';
import isMessageSequential from '../../lib/isMessageSequential';
import { Message } from '../Message';
import isMessageLastSequential from '../../lib/isMessageLastSequential';
import useFetchChatData from '../../hooks/useFetchChatData';
import { getMessageListStyles } from './MessageList.styles';
const MessageList = ({ messages }) => {
  const [loadingMore, setLoadingMore] = useState(false);
  const [offset, setOffset] = useState(0);
  const { loadMoreMessages } = useFetchChatData(false);
  const { theme, mode } = useTheme();
  const styles = getMessageListStyles(mode, theme);
  const showReportMessage = useMessageStore((state) => state.showReportMessage);
  const messageToReport = useMessageStore((state) => state.messageToReport);
  const isMessageLoaded = useMessageStore((state) => state.isMessageLoaded);

  const isMessageNewDay = (current, previous) =>
    !previous || !isSameDay(new Date(current.ts), new Date(previous.ts));

  const handleLoadMore = async () => {
    setLoadingMore(true);
    const newOffset = offset + messages.length;
    await loadMoreMessages(false, newOffset);
    setOffset(newOffset);
    setLoadingMore(false);
  };

  return (
    <Box
      css={css`
        height: ${messages.length ? null : '100%'};
      `}
    >
      {messages.length === 0 ? null : (<Button
        onClick={handleLoadMore}
        disabled={loadingMore}
        css={styles.loadMessagesButton}
      >
        {loadingMore ? 'Loading...' : 'Load More Messages'}
      </Button>)}
      {
        messages.length === 0 ? (
          <Box
            css={styles.noMessagesContainer}
          >
            <Icon name="thread" size="2rem" />
            <Box>
              {isMessageLoaded
                ? 'No messages'
                : 'Ready to chat? Login now to join the fun.'}
            </Box>
          </Box>
        ) : (
          <Box
            css={css`
           display: flex;
            flex-direction: column-reverse;`}
          >
            {messages.map((msg, index, arr) => {
              const prev = arr[index + 1];
              const next = arr[index - 1];

              if (!msg) return null;
              const newDay = isMessageNewDay(msg, prev);
              const sequential = isMessageSequential(msg, prev, 300);
              const lastSequential =
                sequential && isMessageLastSequential(msg, next);

              return (
                <Message
                  key={msg._id}
                  message={msg}
                  newDay={newDay}
                  sequential={sequential}
                  lastSequential={lastSequential}
                  type="default"
                  showAvatar
                />
              );
            })}
            {showReportMessage && (
              <MessageReportWindow messageId={messageToReport} />
            )}
          </Box>
        )
      }
    </Box >
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape),
};

export default MessageList;
