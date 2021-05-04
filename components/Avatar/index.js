import { colors } from "styles/theme";

export default function Avatar({ src, alt, text }) {
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
                    width: 40px;
                }
                div strong {
                    color: ${colors.black};
                    margin-left: 7px;
                }
            `}</style>
        </>
    );
}
