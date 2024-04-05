"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import styles from "./profile.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PostCard from "@/components/postCard/postCard";

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!session?.user) return; // Guard clause to prevent unnecessary API calls
      const res = await fetch(`/api/users/${session.user.id}/posts`);
      const data = await res.json();

      setPosts(data);
    };

    fetchData();
  }, [session?.user]); // Include session?.user in the dependency array

  useEffect(() => {
    const fetchBlogs = async () => {
      if (!session?.user) return; // Guard clause to prevent unnecessary API calls
      const res = await fetch(`/api/users/${session.user.id}/blogs`);
      const data = await res.json();

      setBlogs(data);
    };

    fetchBlogs();
  }, [session?.user]);

  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this message?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/message/${post._id}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((el) => el._id !== post._id);

        setPosts(filteredPosts);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleMessageId = (post) => {
    router.push(`/update-message?id=${post._id}`);
  };

  return (
    <div className={styles.container}>
      {session?.user && (
        <>
          <div className={styles.profile}>
            <div className={styles.img}>
              <Image
                src={session?.user.image}
                fill
                alt="Profile Image"
                priority="true"
              />
            </div>
            <div className={styles.info}>
              <h2 className={styles.name}>{session?.user.name}</h2>
              <p className={styles.email}>{session?.user.email}</p>
            </div>
          </div>

          <div className={styles.innerContainer}>
            <h3 className={styles.title}>Blogs</h3>
            <div className={styles.blogsContainer}>
              {blogs && blogs.map((blog) => <PostCard post={blog} key={blog._id}/>)}
            </div>
          </div>

          <div className={styles.innerContainer}>
            <h3 className={styles.title}>Messages</h3>

            <div className={styles.messageContainer}>
              {posts &&
                posts.map((post) => (
                  <div className={styles.message} key={post._id}>
                    <div className={styles.messageProfile}>
                      <div className={styles.messageImg}>
                        <Image
                          src={session?.user.image}
                          width={35}
                          height={35}
                          alt="Profile Image"
                          priority="true"
                        />
                      </div>
                      <div className={styles.messageInfo}>
                        <h2 className={styles.messageName}>
                          {session?.user.name}
                        </h2>
                        <p className={styles.messageEmail}>
                          {session?.user.email}
                        </p>
                      </div>
                    </div>

                    <p className={styles.messageText}>{post.message}</p>

                    <div className={styles.buttons}>
                      <button
                        className={styles.update}
                        onClick={() => handleMessageId(post)}
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        className={styles.delete}
                        onClick={() => handleDelete(post)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyProfile;
