import { colors } from "styles/theme";

export default function Avatar({ src, alt, text, width = 60 }) {
    return (
        <>
            <div>
                <img src={src} alt={alt} />
                {text && <strong>{text}</strong>}
            </div>
            <style jsx>{`
                div {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                div img {
                    border-radius: 50%;
                    width: ${width}px;
                }
                div strong {
                    color: ${colors.black};
                    margin-left: 7px;
                }
            `}</style>
        </>
    );
}
