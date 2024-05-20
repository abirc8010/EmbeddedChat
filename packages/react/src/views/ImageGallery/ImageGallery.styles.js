import { css } from '@emotion/react';

const styles = {
  overlay: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(51, 51, 51, 0.7);
  `,

  exit: css`
    position: absolute;
    top: 16px;
    right: 16px;
    background: #fff;
    color: #333;
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    z-index: 1001;
  `,

  imageContainer: css`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  `,

  image: css`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  `,

  throbberContainer: css`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  fetchErrorContainer: css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

export default styles;
