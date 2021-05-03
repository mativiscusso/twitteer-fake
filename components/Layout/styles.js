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
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
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
    }
    @media (min-width: ${breakpoints.mobile}) {
        main {
            height: 90vh;
            width: ${breakpoints.mobile};
        }
    }
`;
