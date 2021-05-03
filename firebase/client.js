import firebase from "firebase";
import { getDisplayName } from "next/dist/next-server/lib/utils";

const firebaseConfig = {
    apiKey: "AIzaSyAreKidJ3vpnutkj8xJmggQbgnZKpF24FY",
    authDomain: "devter-soymev.firebaseapp.com",
    projectId: "devter-soymev",
    storageBucket: "devter-soymev.appspot.com",
    messagingSenderId: "1098974451510",
    appId: "1:1098974451510:web:1b4514d7d80fed3ff1c597",
    measurementId: "G-ZP89ED564P",
};

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);

export const loginWithGithub = async () => {
    try {
        const githubProvider = new firebase.auth.GithubAuthProvider();
        const user = await firebase.auth().signInWithPopup(githubProvider);
        const { additionalUserInfo } = user;
        const { username, profile } = additionalUserInfo;
        const { avatar_url, blog } = profile;
        return {
            avatar: avatar_url,
            username: username,
            url: blog,
        };
    } catch (error) {
        console.log(error);
    }
};

export const onAuthStateChanged = (onChange) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            const currentUser = {
                username: user.displayName,
                avatar: user.photoURL,
                email: user.email,
            };
            onChange(currentUser);
        }
    });
};
