import { fonts, colors } from "../../styles/theme";
export default function Layout({ children }) {
    return (
        <>
            <div>
                <main>{children}</main>
            </div>
            <style jsx>{`
                div {
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                main {
                    height: 90vh;
                    background-color: #fff;
                    border-radius: 20px;
                    width: 360px;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                }
            `}</style>
            <style jsx global>
                {`
                    html,
                    body {
                        background-image: radial-gradient(
                                ${colors.primary} 1px,
                                transparent 1px
                            ),
                            radial-gradient(
                                ${colors.primary} 1px,
                                transparent 1px
                            );
                        background-position: 0 0, 25px 25px;
                        background-size: 50px 50px;
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
                `}
            </style>
        </>
    );
}
