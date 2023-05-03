import { Link } from "react-router-dom";
const Offer = () => {
  return (
    <>
      <h1>Je suis sur la page Offer</h1>
      <Link to="/">
        <button>Retourner à la page d'acceuil</button>
      </Link>
    </>
  );
};
export default Offer;
