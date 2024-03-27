"use client";
import { useEffect, useState } from "react";
import styles from "../create-blog/create-blog.module.css";
import BlogForm from "@/components/BlogForm/BlogForm";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const UpdateBlog = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const blogId = searchParams.get("id");
  const currentDate = new Date();
  const [post, setPost] = useState({
    title: "",
    text: "",
    image: "",
    date: currentDate.toISOString(),
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/blog/${blogId}`);
      const data = await res.json();

      setPost(data);
    };

    fetchData();
  }, [blogId]);

  const handleEditBlog = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!blogId) alert("Blog Id not found");

    try {
      const response = await fetch(`/api/blog/${blogId}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: post.title,
          text: post.text,
          image: post.image,
          date: post.date,
        }),
      });

      if(response.ok) {
        router.push(`/blog/${blogId}`)
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <BlogForm
        type={"Update"}
        post={post}
        setPost={setPost}
        handleSubmit={handleEditBlog}
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

export default UpdateBlog;
