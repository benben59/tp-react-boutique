import React from "react";
import CategoryCard from "../Components/CategoryCard";

const Homescreen = () => {
  return (
    <div>
      <div className="row">
        <h1>La boutique de Benoît Marlière</h1>
        <CategoryCard
          img="9782811618124-T.jpg"
          title="Homme"
          text="La mode pour les hommes"
        />
        <CategoryCard
          img="9782811618124-T.jpg"
          title="Femme"
          text="La mode pour les femmes"
        />
      </div>
    </div>
  );
};

export default Homescreen;
