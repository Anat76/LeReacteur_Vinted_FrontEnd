import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Offer from "./page/Offer";
import Header from "./components/Header";
import Login from "./page/Login";
import Signup from "./page/Signup";
import { useState } from "react";
import Cookies from "js-cookie";
import Publish from "./page/Publish";

const App = () => {
  // console.log("mon composant est render");
  const [token, setToken] = useState(Cookies.get("tokenVinted") || null);

  const cookieToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("tokenVinted", token, { expires: 2 });
    } else {
      setToken(null);
      Cookies.remove("tokenVinted");
    }
  };
  return (
    <>
      <Router>
        <Header cookieToken={cookieToken} token={token} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route path="/login" element={<Login cookieToken={cookieToken} />} />
          <Route
            path="/signup"
            element={<Signup cookieToken={cookieToken} />}
          />
          <Route path="publish" element={<Publish token={token} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
