import Layout from "components/Layout";

export default function Timeline() {
    return (
        <Layout>
            <section>
                <header>
                    <h1>Inicio</h1>
                </header>
                <nav></nav>
            </section>
            <style jsx>{`
                header {
                    position: fixed;
                    width: 100%;
                    border-bottom: 1px solid #000;
                    height: 49px;
                    top: 0;
                }
                section {
                    padding-top: 100px;
                }
                h1 {
                    font-size: 18px;
                }
                nav {
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                }
            `}</style>
        </Layout>
    );
}
