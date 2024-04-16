import { handelGithubLogin, handelLogout } from "@/lib/action";
import { auth, signIn, signOut } from "@/lib/auth";
import React from "react";

const LoginPage = async () => {



  return (
    <div>
      <form action={handelGithubLogin}>
        <button>Login with github</button>
      </form>
    
    </div>
  );
};

export default LoginPage;
