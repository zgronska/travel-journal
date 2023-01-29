import React, { useState } from "react";
import Card from "./Card";
import data from "../data";
import Intro from "./Intro";

const MainContent = () => {
  const [isOpen, setIsOpen] = useState(true);

  const Divider = () => {
    return <hr className="divider" />;
  };

  const cards = data.map((item) => {
    return (
      <div className="wrapper" key={item.id}>
        <Card {...item} />
        <Divider />
      </div>
    );
  });

  return (
    <main className="main-content">
      {isOpen && <Intro setIsOpen={setIsOpen} />}
      {cards}
    </main>
  );
};

export default MainContent;
