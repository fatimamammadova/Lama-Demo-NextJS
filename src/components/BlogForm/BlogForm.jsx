import Link from "next/link";
import styles from "./blogForm.module.css";

export const BlogForm = ({ type, post, setPost, handleSubmit, submitting }) => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog Title"
          defaultValue={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Blog Image"
          defaultValue={post.image}
          onChange={(e) => setPost({ ...post, image: e.target.value })}
        />
        <textarea
          cols="30"
          rows="15"
          placeholder="Blog Text"
          defaultValue={post.text}
          onChange={(e) => setPost({ ...post, text: e.target.value })}
        ></textarea>

        <div className={styles.buttons}>
          <Link href="/blog" className={styles.cancel}>
            Cancel
          </Link>
          <button type="submit" className={styles.create} disabled={submitting}>
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
