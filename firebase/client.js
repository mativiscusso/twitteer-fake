import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAreKidJ3vpnutkj8xJmggQbgnZKpF24FY",
    authDomain: "devter-soymev.firebaseapp.com",
    projectId: "devter-soymev",
    storageBucket: "devter-soymev.appspot.com",
    messagingSenderId: "1098974451510",
    appId: "1:1098974451510:web:1b4514d7d80fed3ff1c597",
    measurementId: "G-ZP89ED564P",
};

export const loginWithGithub = async () => {
    firebase.initializeApp(firebaseConfig);
    const githubProvider = new firebase.auth.GithubAuthProvider();
    const user = await firebase.auth().signInWithPopup(githubProvider);
    const { aditionalUserInfo } = user;
    const { username, profile } = aditionalUserInfo;
    const { avatarUrl, blog } = profile;
    return {
        avatar: avatarUrl,
        username: username,
        url: blog,
    };
};
