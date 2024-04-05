"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import styles from "../profile.module.css";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PostCard from "@/components/postCard/postCard";

const Profile = () => {
  const params = useParams();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/users/${params?.id}/posts`);
      const data = await res.json();

      setPosts(data);
    };

    if (params?.id) fetchData();
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(`/api/users/${params?.id}/blogs`);
      const data = await res.json();

      setBlogs(data);
    };

    if (params?.id) fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`/api/admins/${params?.id}`);
      const data = await res.json();

      setUser(data);
    };

    if (params?.id) fetchUser();
  }, []);

  return (
    <div className={styles.container}>
      {user && (
        <>
          <div className={styles.profile}>
            <div className={styles.img}>
              <Image
                src={user?.image}
                fill
                alt="Profile Image"
                priority="true"
              />
            </div>
            <div className={styles.info}>
              <h2 className={styles.name}>{user?.username}</h2>
              <p className={styles.email}>{user?.email}</p>
            </div>
          </div>

          <div className={styles.innerContainer}>
          {blogs && (<h3 className={styles.title}>Blogs</h3>)}
            <div className={styles.blogsContainer}>
              {blogs &&
                blogs.map((blog) => <PostCard post={blog} key={blog._id} />)}
            </div>
          </div>

          {session?.user.id === params?.id && (
            <div className={styles.messages}>
              {posts && (<h3 className={styles.title}>Messages</h3>)}
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
                    </div>
                  ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Profile;
