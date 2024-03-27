"use client";
import { useSession } from "next-auth/react";
import styles from "../contact/contact.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@/components/Form/Form";

const UpdateMessage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const messageId = searchParams.get("id");
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    phoneNumber: "",
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/message/${messageId}`);
      const data = await res.json();
      setPost({
        phoneNumber: data.phoneNumber,
        message: data.message,
      });
    };
    if (messageId) fetchData();
  }, [messageId]);

  const handleEdit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!messageId) return alert("Message ID not found");

    try {
      const res = await fetch(`/api/message/${messageId}`, {
        method: "PATCH",
        body: JSON.stringify({
          phoneNumber: post.phoneNumber,
          message: post.message,
        }),
      });

      if (res.ok) {
        router.push("/profile");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt="Contact Image"
          fill
          className={styles.img}
        />
      </div>

      <Form
        post={post}
        handleSubmit={handleEdit}
        submitting={submitting}
        setPost={setPost}
        session={session}
      />
    </div>
  );
};

export default UpdateMessage;
