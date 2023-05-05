import { Link } from "react-router-dom";

const OfferCard = ({ dataOffer }) => {
  //   console.log(dataOffer);

  return (
    <Link to={`/offer/${dataOffer._id}`}>
      <article>
        <div>
          {dataOffer.owner.account.avatar && (
            <img src={dataOffer.owner.account.avatar.secure_url} alt="" />
          )}
          <span>{dataOffer.owner.account.username}</span>
        </div>
        <img src={dataOffer.product_image.secure_url} alt="" />
        <p>{dataOffer.product_price} €</p>
        <div>
          {dataOffer.product_details.map((detail, index) => {
            if (detail.TAILLE) {
              return <p key={index}>{detail.TAILLE}</p>;
            } else if (detail.MARQUE) {
              return <p key={index}>{detail.MARQUE}</p>;
            } else {
              return null;
            }
          })}
        </div>
      </article>
    </Link>
  );
};

export default OfferCard;
