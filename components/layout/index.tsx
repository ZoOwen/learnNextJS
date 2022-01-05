import React, { Children, ReactNode } from 'react';
import Header from '../header/index';
import Footer from '../footer/index';
import styles from './Layout.module.css';
import Head from 'next/head'

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}
export default function Layout(props: LayoutProps) {
    const { children, pageTitle } = props;
    return (
        <>
            <Head>
                <title>
                    NextJS | {pageTitle}
                </title>
                <meta name="Desc" content="website next js basic" />
            </Head>

            <div className={styles.container}>
                <Header />

                <div className={styles.content}>{children}</div>
                <Footer />
            </div></>

    )
}
