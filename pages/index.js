import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>devter</title>
                <meta name="description" content="Creado por soymev" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className="title">
                <Link href="/">
                    <a>devter</a>
                </Link>
            </h1>
        </>
    );
}
