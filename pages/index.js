import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { colors } from "../styles/theme";
import Button from "../components/Button";
import Github from "../components/Icons/Github";
import { loginWithGithub, onAuthStateChanged } from "../firebase/client";

export default function Home() {
    const [user, setUser] = useState(null);
    console.log(user);
    useEffect(() => {
        console.log(onAuthStateChanged(setUser));
        onAuthStateChanged(setUser);
    }, []);

    const handleClick = async () => {
        try {
            const user = await loginWithGithub();
            console.log(user);
            setUser(user);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Head>
                <title>devter</title>
                <meta name="description" content="Creado por soymev" />
                <link rel="icon" href="/twitter-logo.svg" />
            </Head>
            <Layout>
                <section>
                    <Image
                        src="/twitter-logo.svg"
                        width={100}
                        height={100}
                        alt="Logo devter"
                    />
                    <h1 className="title">
                        <Link href="/">
                            <a>devter</a>
                        </Link>
                    </h1>
                    <h2>Aplicacion para comunicarse entre desarrolladores </h2>
                    {user === null && (
                        <Button onClick={handleClick}>
                            <Github width={24} height={24} fill="#fff" />
                            Login con Github
                        </Button>
                    )}
                    {user && user.avatar && (
                        <div className="user-info">{user.username}</div>
                    )}
                </section>
                <style jsx>
                    {`
                        section {
                            display: grid;
                            height: 100%;
                            place-content: center;
                            place-items: center;
                        }
                        h1 {
                            color: ${colors.primary};
                            font-size: 36px;
                            margin: 0;
                        }
                        h2 {
                            color: ${colors.secondary};
                            font-size: 14px;
                            margin: 0;
                            width: 80%;
                            text-align: center;
                        }
                    `}
                </style>
            </Layout>
        </>
    );
}
