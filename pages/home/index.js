import { useState, useEffect } from "react";
import Devit from "components/Devit";
import { colors } from "styles/theme";
import useUser from "hooks/useUser";
import { fetchLastestDevit } from "firebase/client";
import Link from "next/link";
import Create from "components/Icons/Create";
import Search from "components/Icons/Search";
import Home from "components/Icons/Home";
import Avatar from "components/Avatar";

export default function Timeline() {
    const [devits, setDevits] = useState([]);
    const user = useUser();

    useEffect(() => {
        user &&
            fetchLastestDevit()
                .then(setDevits)
                .catch((err) => console.log(err));
    }, [user]);
    return (
        <>
            <section>
                <header>
                    {user && (
                        <Avatar
                            src={user.avatar}
                            alt={user.username}
                            width={35}
                        />
                    )}
                    <h1>Inicio</h1>
                </header>
                <article>
                    {devits &&
                        devits.map((devit, i) => (
                            <Devit
                                avatar={devit.avatar}
                                username={devit.username}
                                content={devit.content}
                                key={devit.id + i}
                                createdAt={devit.createdAt}
                                likesCount={devit.likesCount}
                                sharedCount={devit.sharedCount}
                                img={devit.img}
                                id={devit.id}
                            />
                        ))}
                </article>
                <nav>
                    <Link href="/home">
                        <a>
                            <Home width={32} height={32} stroke="#09f" />
                        </a>
                    </Link>
                    <Link href="/compose/tweet">
                        <a>
                            <Create width={32} height={32} stroke="#09f" />
                        </a>
                    </Link>
                    <Link href="/compose/tweet">
                        <a>
                            <Search width={32} height={32} stroke="#09f" />
                        </a>
                    </Link>
                </nav>
            </section>
            <style jsx>{`
                section {
                    padding-top: 56px;
                    height: 100%;
                    overflow-y: auto;
                }
                header {
                    position: absolute;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    border-bottom: 1px solid #eee;
                    height: 49px;
                    top: 0;
                    background-color: ${colors.white}ad;
                    backdrop-filter: blur(5px);
                    padding: 0 16px;
                }
                h1 {
                    font-size: 20px;
                    font-weight: 800;
                    margin-left: 35px;
                }
                nav {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 49px;
                    border-top: 1px solid #eee;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    background-color: ${colors.white}ad;
                    backdrop-filter: blur(5px);
                    padding: 0 16px;
                    transition: all 0.2s ease;
                }
                nav a:hover {
                    transform: scale(1.1);
                }
                nav a:hover > :global(svg) {
                    stroke: ${colors.secondary};
                }
            `}</style>
        </>
    );
}
