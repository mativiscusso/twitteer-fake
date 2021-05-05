import Avatar from "components/Avatar";
import useTimeAgo from "hooks/useTimeAgo";

export default function Devit({
    avatar,
    username,
    content,
    createdAt,
    likesCount,
    sharedCount,
}) {
    const timestamp = useTimeAgo(createdAt);

    return (
        <>
            <section>
                <article>
                    <Avatar src={avatar} alt={username} />
                </article>
                <article>
                    <div>
                        <strong>{username}</strong>
                        <small> @{username} -</small>
                        <date> {timestamp}</date>
                    </div>
                    <p>{content}</p>
                    <div>
                        <small>❤ {likesCount}</small>
                        <small>➰ {sharedCount}</small>
                    </div>
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
                article date {
                    font-size: 12px;
                    opacity: 0.8;
                }
                article small:first-child {
                    opacity: 0.7;
                }
            `}</style>
        </>
    );
}
