"use client";
import styles from "./singleBlog.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState, useEffect, Suspense } from "react";
import { formatDate } from "@/lib/function";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SingleBlog = ({ params }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/blog/${params.slug}`);
      const data = await response.json();

      setPost(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const blogLink = document.querySelector(".Blog");
    blogLink.classList.add("navLink_active__xSnAx");
  });

  const handleDeleteBlog = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this blog?");

    if (hasConfirmed) {
      try {
        const response = await fetch(`/api/blog/${post._id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          router.push("/blog");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleBlogId = async (post) => {
    router.push(`/update-blog?id=${post._id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {post && (
          <>
            <div className={styles.imgContainer}>
              <Image
                src={post?.image}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%", height: "calc(100vh - 270px)" }}
                alt="Single Blog Image"
                className={styles.img}
                priority={true}
              />
            </div>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>{post?.title}</h1>
              <div className={styles.detail}>
                <Link
                  href={
                    session?.user.id === post?.creator._id
                      ? `/profile`
                      : `/profile/${post?.creator._id}`
                  }
                  className={styles.authorImgContainer}
                >
                  <Image
                    src={post?.creator.image}
                    alt="Author Image"
                    className={styles.avatar}
                    width={50}
                    height={50}
                    priority={true}
                  />
                </Link>
                <div className={styles.authorDetail}>
                  <span className={styles.authorTitle}>Author</span>
                  <Link
                    href={
                      session?.user.id === post?.creator._id
                        ? `/profile`
                        : `/profile/${post?.creator._id}`
                    }
                    className={styles.username}
                  >
                    {post?.creator.username}
                  </Link>
                </div>
                <div className={styles.detailText}>
                  <span className={styles.detailTitle}>Published</span>
                  <span className={styles.detailValue}>
                    {formatDate(post?.date)}
                  </span>
                </div>
              </div>
              <div className={styles.content}>{post?.text}</div>
            </div>
          </>
        )}
      </div>

      <Suspense fallback={null}>
        {post && session?.user.id === post?.creator._id && (
          <div className={styles.fetchButtons}>
            <button
              type="button"
              className={styles.update}
              onClick={() => handleBlogId(post)}
            >
              Update
            </button>
            <button
              type="button"
              className={styles.delete}
              onClick={() => handleDeleteBlog(post)}
            >
              Delete
            </button>
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default SingleBlog;
