import css from "styled-jsx/css";
import { fonts, colors, breakpoints } from "../../styles/theme";

export const globalStyles = css.global`
    html,
    body {
        background-image: radial-gradient(${colors.primary} 1px, #fafafa 1px),
            radial-gradient(${colors.primary} 1px, #fafafa 1px);
        background-position: 0 0, 20px 20px;
        background-size: 40px 40px;
        padding: 0;
        margin: 0;
        font-family: ${fonts.base};
        overflow: hidden;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
    textarea,
    input {
        font-family: ${fonts.base};
    }
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: ${colors.primary}ae;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: ${colors.secondary};
    }
`;
export default css`
    div {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    main {
        height: 100%;
        width: 100%;
        background-color: #fff;
        border-radius: 20px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        position: relative;
    }
    @media (min-width: ${breakpoints.mobile}) {
        main {
            height: 90vh;
            width: ${breakpoints.mobile};
        }
    }
`;
