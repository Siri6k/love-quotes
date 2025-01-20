import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const quotes = [
  {
    text: "I can live only wholly with you or not at all.",
    author: "Ludwig van Beethoven",
    image: "assets/bg2.png",
  },
  {
    text: "Love is a special word, and I use it only when I mean it.",
    author: "Ray Charles",
    image: "assets/bg2.png",
  },
  {
    text: "Love is supreme and unconditional; like is nice but limited.",
    author: "Duke Ellington",
    image: "assets/bg2.png",
  },
  {
    text: "For suddenly, I saw you there, And through foggy London town, The sun was shining everywhere.",
    author: "George Gershwin",
    image: "assets/bg2.png",
  },
  {
    text: "Love is like a faucet, it turns off and on.",
    author: "Billie Holiday",
    image: "assets/bg2.png",
  },
];

const App = () => {
  const [showCarousel, setShowCarousel] = useState(false);

  const handleButtonClick = () => {
    setShowCarousel(true);
  };

  return (
    <div className="app-container">
      {!showCarousel && (
        <div className="fullscreen-image">
          <img
            src={process.env.PUBLIC_URL + "/assets/bg1.jpg"}
            alt="Background"
            className="img-fluid"
          />
          <button className="btn btn-primary" onClick={handleButtonClick}>
            Cliquez Ici !
          </button>
        </div>
      )}
      {showCarousel && (
        <div className="container">
          <h2>Pour Dieupa, avec amour</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Carousel>
              {quotes.map((quote, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/" + quote.image}
                    alt={quote.author}
                  />
                  <Carousel.Caption>
                    <p>{quote.text}</p>
                    <small>- {quote.author}</small>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </motion.div>
        </div>
      )}
      <footer className="footer">
        <p>
          Copyright 2025 - Your beloved{" "}
          <span style={{ color: "red" }}>Adamchrisk</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
