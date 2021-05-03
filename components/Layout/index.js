import styles, { globalStyles } from "./styles";
export default function Layout({ children }) {
    return (
        <>
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
