import Avatar from "components/Avatar";
import Like from "components/Icons/Like";
import Reuse from "components/Icons/reuse";

import useTimeAgo from "hooks/useTimeAgo";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Devit({
    avatar,
    username,
    content,
    createdAt,
    likesCount,
    sharedCount,
    img,
    id,
}) {
    const timestamp = useTimeAgo(createdAt);
    const router = useRouter();

    const handleDevitClick = (e) => {
        e.preventDefault();
        router.push(`/status/${id}`);
    };
    return (
        <>
            <section onClick={handleDevitClick}>
                <article>
                    <Avatar src={avatar} alt={username} width={50} />
                </article>
                <article>
                    <div>
                        <strong>{username}</strong>
                        <small> @{username} -</small>
                        <Link href={`/status/${id}`}>
                            <a>
                                <time> {timestamp}</time>
                            </a>
                        </Link>
                    </div>
                    <p>{content}</p>
                    {img && <img src={img} />}
                    <div className="devit-buttons">
                        <small>
                            <Like width={20} height={20} stroke="#bbb" />
                            <span>{likesCount}</span>
                        </small>
                        <small>
                            <Reuse width={20} height={20} stroke="#bbb" />
                            <span>{sharedCount}</span>
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
                section:hover {
                    background-color: #f5f3f3;
                    cursor: pointer;
                }
                article span {
                    font-size: 12px;
                    opacity: 0.8;
                }
                article time {
                    font-size: 12px;

                    opacity: 0.7;
                }
                article img {
                    width: 100%;
                    height: auto;
                    border-radius: 15px;
                    margin: 16px 0;
                }
                .devit-buttons {
                    display: flex;
                    width: 100%;
                    justify-content: space-around;
                }
                .devit-buttons small {
                    width: 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #bbb;
                    padding-top: 16px;
                }
                a:hover {
                    text-decoration: underline;
                }
            `}</style>
        </>
    );
}
