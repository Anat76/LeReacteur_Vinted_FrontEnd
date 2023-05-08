import { useState } from "react";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  return (
    <>
      <section>
        <form action="">
          <input type="text" placeholder="Nom d'utilistateur" />
          <input type="email" />
          <input type="password" />
        </form>
      </section>
    </>
  );
};
export default Login;
