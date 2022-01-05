import Layout from "../components/layout";
import styles from '../styles/Blog.module.css';


export default function Blog(props: any) {
    const { dataBlog } = props;
    console.log("data", dataBlog)
    return (
        <Layout pageTitle="Blog Page!">
            <p className="title">blog page</p>
            {dataBlog.map((blog: any) => (
                <div key={blog.id} className={styles.card}>
                    <h3>Title:{blog.title}</h3>
                    <p>Blog:{blog.body}</p>
                </div>
            ))}
        </Layout>

    )
}
// https://jsonplaceholder.typicode.com/posts

export const getServerSideProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataBlog = await res.json();
    console.log("b b b",)
    return {
        props: {
            dataBlog,
        }
    }
}