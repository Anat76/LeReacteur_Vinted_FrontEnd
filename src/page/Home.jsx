import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import OfferCard from "../components/OfferCard";

const Home = () => {
  // State qui gere la data reçue
  const [data, setData] = useState();
  // State qui permet de savoir si la requete au serveur est bien arrivée
  const [isLoadind, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // je stock la reponse dans le state data
        setData(result.data);
        // console.log(result.data);
        // je passe mon state isloading en false
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    // j'appel ma fonction fetchData
    fetchData();
    // console.log("mon useEffect se render");
  }, []);

  return isLoadind ? (
    <div>Please wait ...</div>
  ) : (
    <>
      <h1>Je suis sur la page d'acceuil</h1>

      {data.offers.map((offer) => {
        //   console.log(offers._id)
        return <OfferCard key={offer._id} dataOffer={offer} />;
      })}
    </>
  );
};
export default Home;
