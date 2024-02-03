import styles from "./singleBlog.module.css"
import Image from "next/image"

const SingleBlog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="" fill alt="" className={styles.img}/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image src="" alt="" className={styles.avatar} width={50} height={50} />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquid sunt neque, voluptates nesciunt obcaecati libero. Vero quas deleniti numquam aliquid labore, pariatur eos ut consectetur, quibusdam praesentium, totam beatae?
                </div>
            </div>
        </div>
    )
}

export default SingleBlog