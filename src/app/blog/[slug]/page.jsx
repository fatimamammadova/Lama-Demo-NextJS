"use client"
import PostUser from "@/components/postUser/postUser"
import styles from "./singleBlog.module.css"
import Image from "next/image"
import { Suspense } from "react"
import { getPost } from "@/lib/data"

// FETCH DATA WITH API
// const getData = async (slug) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

//     if(!res.ok) {
//         throw new Error('Something went wrong')
//     }

//     return res.json()
// }

const SingleBlog = async ({params}) => {

    const {slug} = params

    // FETCH DATA WITH API
    // const post = await getData(slug)

    // FETCH DATA WITHOUT API
    const post = await getPost(slug)

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src={post.img} fill alt="Single Blog Image" className={styles.img}/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Image src={post.img} alt="Author Image" className={styles.avatar} width={50} height={50} />
                    <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId={post.userId}/>
                    </Suspense>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.body}
                </div>
            </div>
        </div>
    )
}

export default SingleBlog