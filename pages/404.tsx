import React from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/router';
import { imageConfigDefault } from 'next/dist/server/image-config';
export default function Custom404() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 2000);
    })

    return (
        <div>
            <p>oopss</p>
        </div>
    )
}
