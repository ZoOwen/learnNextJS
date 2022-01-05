import React from 'react'
import Layout from '../../components/layout'
import { useRouter } from 'next/router'

// interface userDetailProps {
//     user: object;
// }
export default function userDetail(props: any) {
    // const router = useRouter();
    // const { id } = router.query;
    const { user } = props;
    return (
        <Layout pageTitle='User page detail'>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </Layout>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();

    const paths = dataUsers.map((user: any) => {
        return {
            params: {
                id: `${user.id}`,

            }
        }
    })
    return {
        paths,
        fallback: false,
    }

}

export const getStaticProps = async (context: any) => {
    const { id } = context.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await res.json();

    return {
        props: {
            user,
        }
    }

}