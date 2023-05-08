import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = ({ cookieToken }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  return (
    <section>
      <h1>S'inscrire</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const result = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/signup",
              {
                username: username,
                email: email,
                password: password,
                newsletter: newsletter,
              }
            );
            console.log(result.data.token);
            if (result.data.token) {
              cookieToken(result.data.token);
            }
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        <input
          type="text"
          placeholder="Nom d'utilistateur"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
          value={username}
        />
        <input
          type="email"
          placeholder="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <input
          type="checkbox"
          onChange={() => {
            setNewsletter(!newsletter);
          }}
          id="news"
        />
        <label htmlFor="news">S'inscrire à la newsletter</label>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <button type="submit">S'inscrire</button>
      </form>
      <Link to={"/login"}>
        <p>Tu as déjà un compte ? Connecte-toi !</p>
      </Link>
    </section>
  );
};
export default Signup;
