import { Link } from "react-router-dom";
const Home = ({ data }) => {
  return (
    <>
      <h1>Je suis sur la page d'acceuil</h1>
      <Link to="/offer">
        <button>aller sur offers</button>
      </Link>
      {data.offers.map((offers) => {
        //   console.log(offers._id)
        return (
          <article key={offers._id}>
            <div>
              {/* <img src={offers.owner.account.avatar.secure_url} alt="" /> */}
              <h5>{offers.owner.account.username}</h5>
            </div>
          </article>
        );
      })}
      <h5></h5>
    </>
  );
};
export default Home;
