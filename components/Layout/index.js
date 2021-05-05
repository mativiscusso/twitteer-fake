import Head from "next/head";
import styles, { globalStyles } from "./styles";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>devter</title>
                <meta name="description" content="Creado por soymev" />
                <link rel="icon" href="/twitter-logo.svg" />
            </Head>
            <div>
                <main>{children}</main>
            </div>
            <style jsx>{styles}</style>
            <style jsx global>
                {globalStyles}
            </style>
        </>
    );
}
