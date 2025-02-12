import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const quotes = [
  {
    text: "Fuck what I said, it don't mean shit now.",
    author: "🖕🖕🖕🖕🖕",
    image: "assets/bg3.png",
  },
  {
    text: "Fuck the presents, might as well throw 'em out.",
    author: "🖕🖕🖕🖕🖕🖕",
    image: "assets/bg5.png",
  },
  {
    text: "Fuck you, you ho, I don't want you back",
    author: "🖕🖕🖕🖕🖕🖕",
    image: "assets/bg2.png",
  },
  {
    text: "Fuck what I said, it don't mean shit now.",
    author: "🖕🖕🖕🖕🖕🖕",
    image: "assets/bg5.png",
  },
  {
    text: "Fuck you, you ho, I don't want you back",
    author: "🖕🖕🖕🖕🖕🖕🖕🖕",
    image: "assets/bg3.png",
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
            🖕🖕🖕🖕🖕🖕
          </button>
        </div>
      )}
      {showCarousel && (
        <div className="container">
          <h2>Fuck you Dieupa 🖕🖕🖕🖕🖕</h2>
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
          Copyright 2025 - Bad bitch{" "}
          <span style={{ color: "red" }}>🖕🖕🖕</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
