import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Je suis sur la page d'acceuil</h1>
      <Link to="/offer">
        <button>aller sur offers</button>
      </Link>
    </>
  );
};
export default Home;
