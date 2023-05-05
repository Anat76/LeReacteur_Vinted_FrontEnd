import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
