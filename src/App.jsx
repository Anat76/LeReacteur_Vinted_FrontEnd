import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Offer from "./page/offer";
import Header from "./components/Header";

const App = () => {
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
  // console.log("mon composant est render");
  return (
    <>
      {isLoadind ? (
        <div>Please wait ...</div>
      ) : (
        <>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home data={data} />} />
              <Route path="/offer" element={<Offer />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
};

export default App;
