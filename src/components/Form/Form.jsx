import styles from "./form.module.css";

export const Form = ({ post, handleSubmit, submitting, setPost, session }) => {
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name and Surname"
          defaultValue={session?.user.name || ""}
          readOnly={session}
          
        />
        <input
          type="text"
          placeholder="Email Address"
          defaultValue={session?.user.email || ""}
          readOnly={session}
        />
        <input
          type="text"
          placeholder="Phone Number (Optional)"
          value={post.phoneNumber}
          onChange={(e) => setPost({ ...post, phoneNumber: e.target.value })}
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="Message"
          value={post.message}
          onChange={(e) => setPost({ ...post, message: e.target.value })}
        ></textarea>

        <button type="submit" disabled={submitting}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
