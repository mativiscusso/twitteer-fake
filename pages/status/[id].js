import Devit from "components/Devit";

export default function DevitPage({ data }) {
    return <Devit {...data} />;
}

export async function getServerSideProps(context) {
    const { params } = context;
    const { id } = params;
    const apiResponse = await fetch(`http://localhost:3000/api/devits/${id}`);
    const data = await apiResponse.json();
    if (!data) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }
    return {
        props: { data }, // will be passed to the page component as props
    };
}
