import Button from "components/Button";
import Layout from "components/Layout";

export default function DevitPage() {
    return (
        <Layout>
            <form action="" method="post">
                <textarea
                    name="devit"
                    rows="5"
                    placeholder="¿Qué está pasando?"
                ></textarea>
                <div>
                    <Button>Devitear</Button>
                </div>
            </form>
            <style jsx>{`
                form textarea {
                    width: 100%;
                    outline: 0;
                    font-size: 16px;
                    padding: 14px;
                    resize: none;
                    border: 0;
                }
                div {
                    padding: 14px;
                }
            `}</style>
        </Layout>
    );
}
