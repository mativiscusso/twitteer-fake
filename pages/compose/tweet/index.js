import { useState } from "react";
import Button from "components/Button";
import Layout from "components/Layout";
import useUser from "hooks/useUser";

import { addDevit } from "firebase/client";
import { useRouter } from "next/router";

export default function DevitPage() {
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const user = useUser();
    const router = useRouter();

    const handleChange = (e) => {
        const { value } = e.target;
        setMessage(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        addDevit({
            avatar: user.avatar,
            id: user.id,
            username: user.username,
            content: message,
        })
            .then((result) => {
                router.push("/home");
                setIsSending(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <textarea
                    name="devit"
                    rows="5"
                    placeholder="¿Qué está pasando?"
                    onChange={handleChange}
                ></textarea>
                <div>
                    <Button
                        disabled={
                            message.length === 0 ||
                            message.length === undefined ||
                            isSending === true
                        }
                    >
                        Devitear
                    </Button>
                </div>
            </form>
            <style jsx>{`
                form textarea {
                    width: 100%;
                    outline: 0;
                    font-size: 18px;
                    padding: 18px;
                    resize: none;
                    border: 0;
                }
                div {
                    padding: 14px 18px;
                }
            `}</style>
        </Layout>
    );
}
