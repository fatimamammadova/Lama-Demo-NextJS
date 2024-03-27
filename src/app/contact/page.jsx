"use client";
import { useSession } from "next-auth/react";
import styles from "./contact.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "@/components/Form/Form";

const Contact = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (!session) {
      alert("You are not a profile. If you send a message, please log in ");
      return;
    } else {
      try {
        const response = await fetch("/api/message/new", {
          method: "POST",
          body: JSON.stringify({
            userId: session?.user.id,
            name: session?.user.name,
            email: session?.user.email,
            phoneNumber: post.phoneNumber,
            message: post.message,
          }),
        });

        if (response.ok) {
          router.push("/");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
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
        handleSubmit={handleSubmit}
        submitting={submitting}
        setPost={setPost}
        session={session}
      />
    </div>
  );
};

export default Contact;
