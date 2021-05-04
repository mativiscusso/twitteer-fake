import Avatar from "components/Avatar";

export default function Devit({ avatar, username, message }) {
    return (
        <>
            <section>
                <article>
                    <Avatar src={avatar} alt={username} />
                </article>
                <article>
                    <strong>{username}</strong>
                    <p>{message}</p>
                </article>
            </section>
            <style jsx>{`
                section {
                    display: flex;
                    padding: 12px 16px 12px 16px;
                    border-bottom: 1px solid rgb(235, 238, 240);
                }
                section p {
                    margin: 0;
                    line-height: 1.2;
                    font-size: 14px;
                }
                article:first-child {
                    margin-right: 12px;
                }
            `}</style>
        </>
    );
}
