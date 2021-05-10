import { firestore } from "firebase/admin";
export default function (req, res) {
    const { query } = req;
    const { id } = query;
    firestore
        .collection("devits")
        .doc(id)
        .get()
        .then((doc) => {
            const data = doc.data();
            const id = doc.id;
            const { createdAt } = data;
            return res.json({ ...data, id, createdAt: +createdAt.toDate() });
        })
        .catch((err) => {
            console.log(err);
            return res.status(404);
        });
}
