import React from "react";
import CategoryCard from "../Components/CategoryCard";

const Homescreen = () => {
  const cardCategories = [
    {
      id: "1",
      title: "Terreur sous les tropiques",
      description: "something",
      image: "../../assets/img/9782811618124-T.jpg",
    },
    {
      id: "2",
      title: "Les conquérants",
      description: "something",
      image: "./assets/img/9782811618124-T.jpg",
    },
    {
      id: "3",
      title: "Massacre à la sulfateuse",
      description: "something",
      image: "./assets/img/9782811618124-T.jpg",
    },
    {
      id: "4",
      title: `L'apprentie sorcière`,
      description: "something",
      image: "./assets/img/9782811618124-T.jpg",
    },
  ];

  return (
    <div>
      <h1>La boutique de Benoît Marlière</h1>
      <div className="row">
        {cardCategories.map((card) => (
          <CategoryCard
            card={card}
            title={card.title}
            description={card.description}
            image={card.image}
            key={card.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Homescreen;
