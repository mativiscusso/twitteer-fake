import Avatar from "components/Avatar";
import Like from "components/Icons/Like";
import Reuse from "components/Icons/reuse";

import useTimeAgo from "hooks/useTimeAgo";

export default function Devit({
    avatar,
    username,
    content,
    createdAt,
    likesCount,
    sharedCount,
    img,
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
                        <span> {timestamp}</span>
                    </div>
                    <p>{content}</p>
                    {img && <img src={img} />}
                    <div>
                        <small>
                            <Like width={18} height={18} stroke="#bbb" />
                            {likesCount}
                        </small>
                        <small>
                            <Reuse width={18} height={18} stroke="#bbb" />
                            {sharedCount}
                        </small>
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
                    line-height: 1.5;
                    font-size: 15px;
                }
                article:first-child {
                    margin-right: 12px;
                }
                article span {
                    font-size: 12px;
                    opacity: 0.8;
                }
                article small:first-child {
                    opacity: 0.7;
                }
                article img {
                    width: 100%;
                    height: auto;
                    border-radius: 15px;
                    margin: 16px 0;
                }
            `}</style>
        </>
    );
}
