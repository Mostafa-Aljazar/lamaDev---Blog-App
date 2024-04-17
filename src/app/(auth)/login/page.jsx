import { handelGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import LoginForm from "@/components/LoginForm/LoginForm";

const LoginPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handelGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;