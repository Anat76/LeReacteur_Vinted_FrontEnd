import logo from "../assets/img/logoVinted.png";
const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <div>
        <button>S'incrire</button>
        <button>Se connecter</button>
        <button>Vends tes articles</button>
      </div>
    </header>
  );
};
export default Header;
