import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState();
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState("");

  return (
    <>
      <h1>Publier une annonce</h1>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
        }}
      >
        <input type="file" />
        <div>
          <p>Titre</p>
          <input type="text" placeholder="ex: Chemise Sezanne Verte" />
          <p>Decris ton article</p>
          <input
            type="text"
            placeholder="ex: Porté quelques fois, taille correctement"
          />
        </div>
        <div>
          <p>marque</p>
          <input type="text" placeholder="ex: Zara" />
          <p>Taille</p>
          <input type="text" placeholder="ex: L / 40 / 12" />
          <p>Couleur</p>
          <input type="text" placeholder="ex: Fushia" />
          <p>Etat</p>
          <input type="text" placeholder="ex: Neuf avec etiquette" />
          <p>Lieu</p>
          <input type="text" placeholder="ex: Paris" />
        </div>
        <div>
          <p>Price</p>
          <input type="text" />
        </div>
      </form>
    </>
  );
};

export default Publish;
