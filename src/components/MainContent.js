import Card from "./Card";
import data from "../data";

const MainContent = () => {
  const Divider = () => {
    return <hr className="divider" />;
  };

  const cards = data.map((item) => {
    return (
      <div className="wrapper">
        <Card key={item.id} {...item} />
        <Divider />
      </div>
    );
  });

  return <main className="main-content">{cards}</main>;
};

export default MainContent;
