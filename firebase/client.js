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

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const loginWithGithub = async () => {
    try {
        const githubProvider = new firebase.auth.GithubAuthProvider();
        const user = await firebase.auth().signInWithPopup(githubProvider);
        const { additionalUserInfo } = user;
        const { username, profile } = additionalUserInfo;
        // eslint-disable-next-line camelcase
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
                id: user.uid,
            };
            onChange(currentUser);
        }
    });
};

export const addDevit = ({ avatar, id, username, content, img }) => {
    return db.collection("devits").add({
        avatar,
        id,
        username,
        content,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
        likesCount: 0,
        sharedCount: 0,
        img,
    });
};

export const fetchLastestDevit = () => {
    return db
        .collection("devits")
        .orderBy("createdAt", "desc")
        .get()
        .then(({ docs }) => {
            return docs.map((doc) => {
                const data = doc.data();
                const id = doc.id;
                const { createdAt } = data;
                return { ...data, id, createdAt: +createdAt.toDate() };
            });
        })
        .catch((err) => {
            console.log(err);
        });
};

export const uploadImage = (image) => {
    const ref = firebase.storage().ref(`images/${image.name}`);
    const task = ref.put(image);
    return task;
};
