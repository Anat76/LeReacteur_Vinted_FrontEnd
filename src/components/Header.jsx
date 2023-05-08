import logo from "../assets/img/logoVinted.png";
import { Link } from "react-router-dom";
const Header = ({ cookieToken, token }) => {
  return (
    <header>
      <img src={logo} alt="" />
      <div>
        {token ? (
          <>
            <button
              onChange={() => {
                cookieToken(null);
              }}
            >
              Deconnexion
            </button>
            <button>Vends tes articles</button>
          </>
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
      </div>
    </header>
  );
};
export default Header;
