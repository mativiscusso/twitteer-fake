import { useState, useEffect } from "react";
import Button from "components/Button";
import Avatar from "components/Avatar";
import ImageUpload from "components/Icons/ImageUpload";

import useUser from "hooks/useUser";

import { addDevit, uploadImage } from "firebase/client";
import { useRouter } from "next/router";
import { colors } from "styles/theme";

export default function DevitPage() {
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [task, setTask] = useState(null);
    const [imgStoraged, setImgStoraged] = useState(null);
    const user = useUser();
    const router = useRouter();

    useEffect(() => {
        if (task) {
            const onProgress = () => {};
            const onError = () => {};
            const OnComplete = () => {
                console.log("Completed");
                task.snapshot.ref
                    .getDownloadURL()
                    .then(setImgStoraged)
                    .catch((err) => {
                        console.log(err);
                    });
            };
            task.on("state_changed", onProgress, onError, OnComplete);
        }
    }, [task]);

    const handleChangeImage = (e) => {
        const file = e.target.files[0];
        console.log(file);
        const task = uploadImage(file);
        setTask(task);
    };

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
            img: imgStoraged,
        })
            .then((result) => {
                router.push("/home");
                setIsSending(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    console.log(user);
    return (
        <>
            <section>
                {user && <Avatar src={user.avatar} alt={user.username} />}

                <form onSubmit={handleSubmit}>
                    <textarea
                        name="devit"
                        rows="5"
                        placeholder="¿Qué está pasando?"
                        onChange={handleChange}
                    ></textarea>
                    {imgStoraged && <img src={imgStoraged} />}
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
                        <label htmlFor="image">
                            <ImageUpload width={24} height={24} />
                            <input
                                type="file"
                                name="image"
                                id="image"
                                onChange={handleChangeImage}
                            />
                        </label>
                    </div>
                </form>
            </section>
            <style jsx>{`
                section {
                    display: flex;
                    align-items: start;
                    padding: 12px;
                }
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
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 70%;
                }
                svg {
                    margin: 0 20px;
                }
                img {
                    width: 180px;
                }
                input {
                    opacity: 0;
                    width: 0.1px;
                    height: 0.1px;
                    position: absolute;
                }
                label {
                    display: block;
                    position: relative;
                    width: 200px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: ${colors.primary};
                    cursor: pointer;
                    transition: transform 0.2s ease-out;
                }
                label:hover {
                    color: ${colors.secondary};
                }
            `}</style>
        </>
    );
}
