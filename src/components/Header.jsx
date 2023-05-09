import logo from "../assets/img/logoVinted.png";
import { Link } from "react-router-dom";
const Header = ({ cookieToken, token }) => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <div>
        {token ? (
          <button
            onChange={() => {
              cookieToken(null);
            }}
          >
            Deconnexion
          </button>
        ) : (
          <div>
            <Link to={"/login"}>
              <button>Se connecter</button>
            </Link>
            <Link to={"/signup"}>
              <button>S'inscrire</button>
            </Link>
          </div>
        )}
        <Link to={"/publish"}>
          <button>Vends tes articles</button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
