const timeline = [
    {
        id: 0,
        avatar: "https://picsum.photos/id/237/200",
        username: "stellita",
        message:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
        id: 1,
        avatar: "https://picsum.photos/id/238/200",
        username: "soymev",
        message:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou",
    },
    {
        id: 2,
        avatar: "https://picsum.photos/id/239/200",
        username: "liomesis",
        message:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    },
    {
        id: 3,
        avatar: "https://picsum.photos/id/237/200",
        username: "stellita",
        message:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
        id: 4,
        avatar: "https://picsum.photos/id/238/200",
        username: "soymev",
        message:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou",
    },
    {
        id: 5,
        avatar: "https://picsum.photos/id/239/200",
        username: "liomesis",
        message:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    },
    {
        id: 6,
        avatar: "https://picsum.photos/id/237/200",
        username: "stellita",
        message:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
    },
    {
        id: 7,
        avatar: "https://picsum.photos/id/238/200",
        username: "soymev",
        message:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou",
    },
    {
        id: 8,
        avatar: "https://picsum.photos/id/239/200",
        username: "liomesis",
        message:
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
    },
];

export default function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.send(JSON.stringify(timeline));
}
