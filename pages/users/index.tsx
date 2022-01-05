import React from 'react'
import Layout from '../../components/layout'
import router, { useRouter } from 'next/router';
import styles from '../../styles/Users.module.css'
const Users = (props: any) => {
    const { dataUsers } = props;
    const router = useRouter()
    console.log("ini data", dataUsers)
    return (
        <Layout pageTitle='User page'>
            <p>index users</p>
            {dataUsers.map((user: any) => (

                <div key={user.id} onClick={() => router.push(`/users/${user.id}`)} className={styles.card}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>

            ))}
        </Layout>
    )
}

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const dataUsers = await res.json();
    return {
        props: {
            dataUsers,

        },
    }

}
// const OnClickData = (user) => {
//     router.push(`/users/${user.id}`)

// }

// export const GetStaticProps = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const dataUsers = await res.json();
//     return {
//         props: {
//             dataUsers,

//         },
//     };

// }


// import React from 'react'
// import Layout from '../../components/layout'
// import { useRouter } from 'next/router'
// export default function index() {
//     const router = useRouter();
//     const { id } = router.query;
//     return (
//         <Layout pageTitle='User page'>
//             <p>index users {id}</p>
//         </Layout>
//     )
// }

export default Users;