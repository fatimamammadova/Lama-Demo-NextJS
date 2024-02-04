"use client"
import PostUser from "@/components/postUser/postUser"
import styles from "./singleBlog.module.css"
import Image from "next/image"

const getData = async (slug) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)

    if(!res.ok) {
        throw new Error('Something went wrong')
    }

    return res.json()
}

const SingleBlog = async ({params}) => {


    const {slug} = params
    const post = await getData(slug)


    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.unsplash.com/photo-1706706588488-7f1ed39abe18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" fill alt="Single Blog Image" className={styles.img}/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Image src="https://images.unsplash.com/photo-1706706588488-7f1ed39abe18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Author Image" className={styles.avatar} width={50} height={50} />
                    <PostUser userId={post.userId}/>
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