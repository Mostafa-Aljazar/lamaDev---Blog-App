import { handelGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import LoginForm from "@/components/LoginForm/LoginForm";
// import { auth } from "@/lib/auth";
// import { useRouter } from "next/navigation";

const LoginPage = async () => {

  // console.log("auth :" ,(await auth()).user)
  // await(await auth()).user && useRouter().push("/")
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