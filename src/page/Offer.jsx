import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // const params = useParams();
  // console.log(params.id);

  const { id } = useParams();
  // console.log({ id });

  useEffect(() => {
    const offerId = async () => {
      try {
        const result = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(result.data);
        // console.log(result.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    offerId();
  }, []);

  return isLoading ? (
    <div>Loading . . .</div>
  ) : (
    <>
      <h1>Je suis sur la page Offer</h1>
      <Link to="/">
        <button>Retourner à la page d'acceuil</button>
      </Link>
      <div>
        <img src={data.product_image.secure_url} alt="" />
        <p>{data.product_price} €</p>
        <div>
          {data.product_details.map((details, index) => {
            console.log(details);
            return (
              <div key={index}>
                <p>{details.MARQUE}</p>
                <p>{details.ETAT}</p>
                <p>{details.COULEUR}</p>
                <p>{details.EMPLACEMENT}</p>
              </div>
            );
          })}
          <p>{data.product_description}</p>
          <div>
            {data.owner.account.avatar && (
              <img src={data.owner.account.avatar.secure_url} alt="" />
            )}
            <span>{data.owner.account.username}l</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Offer;
