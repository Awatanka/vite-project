import "./App.css";
import NavBar from "./compopnents/NavBar";
import Hero from "./compopnents/Hero";
import Card from "./compopnents/Card";
import dataSet from "./data.jsx";
import Main from "./compopnents/Main";

function App() {
  const cards = dataSet.map((item) => <Card key={item.id} item={item} />);
  return (
    <>
      <NavBar />
      <Hero />
      <section className="cards-list"> {cards}</section>
      <Main />
    </>
  );
}

export default App;
