import { useState, useEffect } from "react";
import Layout from "components/Layout";
import Devit from "components/Devit";
import { colors } from "styles/theme";

export default function Timeline() {
    const [devits, setDevits] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/api/statuses/home_timeline")
            .then((res) => res.json())
            .then(setDevits)
            .catch((err) => console.log(err));
    }, []);
    return (
        <Layout>
            <section>
                <header>
                    <h1>Inicio</h1>
                </header>
                <article>
                    {devits.map((devit) => (
                        <Devit
                            avatar={devit.avatar}
                            username={devit.username}
                            message={devit.message}
                            key={devit.id}
                        />
                    ))}
                </article>
                <nav>
                    <span>icon</span>
                    <span>icon</span>
                    <span>icon</span>
                    <span>icon</span>
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
                    width: 100%;
                    border-bottom: 1px solid #eee;
                    height: 49px;
                    top: 0;
                    background-color: ${colors.white}ad;
                    backdrop-filter: blur(5px);
                    padding: 0 16px;
                }
                h1 {
                    font-size: 22px;
                    font-weight: 800;
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
                }
            `}</style>
        </Layout>
    );
}
