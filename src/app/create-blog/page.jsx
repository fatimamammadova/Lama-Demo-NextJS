"use client";
import BlogForm from "@/components/BlogForm/BlogForm";
import styles from "./create-blog.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
const CreateBlog = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const currentDate = new Date()
  const [post, setPost] = useState({
    title: "",
    text: "",
    image: "",
    date: currentDate.toISOString(),
  });

  const handleBlog = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
        const response = await fetch("/api/blog/new", {
          method: "POST",
          body: JSON.stringify({
            userId: session?.user.id,
            title: post.title,
            text: post.text,
            image: post.image,
            date: post.date,
          }),
        });

        if (response.ok) {
          router.push("/blog");
        }


      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
  };

  return (
    <div className={styles.container}>
      <BlogForm
        type={"Create"}
        post={post}
        setPost={setPost}
        handleSubmit={handleBlog}
        submitting={submitting}
      />
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="Contact Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default CreateBlog;
