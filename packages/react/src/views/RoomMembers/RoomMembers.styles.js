import { css } from '@emotion/react';

export const getRoomMemberStyles = () => {
  const styles = {
    container: css`
      display: flex;
      flex-direction: column;
      overflow: auto;
      justify-content: center;
      padding: 0 2rem 1rem;
      width: 300px;
      @media (max-width: 780px) {
        width: 100vw;
      }
    `,
  };

  return styles;
};

export const RoomMemberItemStyles = {
  container: css`
    width: 100%;
    padding-bottom: 8px;
    padding-top: 8px;
    display: flex;
    align-items: center;
  `,

  icon: css`
    padding: 0.125em;
    margin-right: 0.5rem;
    align-self: center;
  `,
};

export const InviteMemberStyles = {
  parentContainer: css`
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
  `,

  childContainer: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  `,
};
