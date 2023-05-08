import { useState } from "react";
import axios from "axios";

const Login = ({ cookieToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const result = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/login",
              {
                email: email,
                password: password,
              }
            );
            if (result.data.token) {
              cookieToken(result.data.token);
            }
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        <input
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="votre mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <button type="submit">Se connecter</button>
      </form>
    </section>
  );
};
export default Login;
