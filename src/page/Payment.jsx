/* Bonjour ^^

je n'ai pas reussi à faire ce dernier excercice ...
je l'ai commencé quand j'ai reussi à rattraper mon retard des autres exercies seulement je l'ai attaqué le soir du rendu à 20h je n'ai pas posté d'issue vu que les formateurs ne sont plus disponible et pour eviter de spamer Xavier 😅.

j'ai donc preferé essayer de regarder et essayé de me debrouiller mais sans grande reussite pour preuve ><
je suis content j'ai reussi à rattrapé mon retard ! 
Merci pour l'aide au quotidien ! */

/*

import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Payment = ({ token }) => {
  const [completed, setCompleted] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const Submit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);
    const stripeResponse = await stripe.createToken(cardElement, {
      name: "Anat",
    });
    console.log(stripeResponse);
    const stripeToken = stripeResponse.token.id;
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/payment",
      {
        stripeToken,
      }
    );
    console.log(response.data);
    if (response.data.status === "succeeded") {
      setCompleted(true);
    }
};

return token ? (
  <>
    <form onSubmit={Submit}>
      <h1>Paiement</h1>
      <CardElement />
      <button>Pay</button>
    </form>
  </>
) : (
  <Navigate to="/login" />
);
};

export default Payment; 

*/
