import { Link } from "react-router-dom";
const Home = ({ data }) => {
  return (
    <>
      <h1>Je suis sur la page d'acceuil</h1>
      <Link to="/offer">
        <button>aller sur offers</button>
      </Link>
      {data.offers.map((offer) => {
        //   console.log(offers._id)
        const account = offer.owner.account;

        return (
          <article key={offer._id}>
            <section>
              {account.avatar && <img src={account.avatar.secure_url} alt="" />}
              <h5>{account.username}</h5>
              <div>
                {offer.product_pictures.map((picture) => {
                  // console.log(picture.secure_url);
                  return (
                    <img
                      key={picture.asset_id}
                      src={picture.secure_url}
                      alt=""
                    />
                  );
                })}
              </div>
              <p>{offer.product_price}</p>;
            </section>
            <div></div>
          </article>
        );
      })}
      <h5></h5>
    </>
  );
};
export default Home;
