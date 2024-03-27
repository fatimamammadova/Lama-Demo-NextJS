import { formatDate } from "@/lib/function";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={post.image}
            alt="Blog Image"
            className={styles.img}
            fill
            sizes="100vw"
            // style={{ width: "100%", height: "auto" }}
            priority={true}
          />
        </div>
        <span className={styles.date}>{formatDate(post.date)}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.text.slice(0, 100)}...</p>
        <Link className={styles.link} href={`/blog/${post._id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
