import { css } from '@emotion/react';
import { darken, lighten } from '@embeddedchat/ui-elements';

export const getMessageListStyles = (mode, theme) => {
    const styles = {
        loadMessagesButton: css`
        display: block;
        margin-bottom: 30px;
        margin-left: auto;
        margin-right: auto;
        color: ${theme.colors.secondaryForeground};
        background-color: ${mode === 'light'
                ? darken(theme.colors.background, 0.03)
                : lighten(theme.colors.background, 1)};
        `,
        noMessagesContainer: css`
        display: flex;
        height:100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        `,
    }
    return styles;
};