import { colors } from "styles/theme";

export default function Button({ children, onClick, disabled }) {
    return (
        <>
            <button disabled={disabled} onClick={onClick}>
                {children}
            </button>
            <style jsx>{`
                button {
                    border: 0;
                    background: ${colors.black};
                    color: ${colors.white};
                    border-radius: 9999px;
                    padding: 8px 24px;
                    font-weight: 600;
                    margin: 12px 0;
                    display: flex;
                    align-items: center;
                    transition: opacity 0.2s ease;
                }
                button[disabled] {
                    opacity: 0.2;
                    pointer-events: none;
                }
                button > :global(svg) {
                    margin-right: 8px;
                }
                button:hover {
                    cursor: pointer;
                    opacity: 0.7;
                }
            `}</style>
        </>
    );
}
