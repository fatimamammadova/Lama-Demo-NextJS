"use client";
import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blog = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/blog");
      const data = await response.json();

      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {session && (
        <div className={styles.buttonContainer}>
          <Link className={styles.createButton} href="/create-blog">
            Create Blog
          </Link>
        </div>
      )}

      {posts && posts.map((post) => (
        <div className={styles.post} key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Blog;
