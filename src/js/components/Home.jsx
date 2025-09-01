import React from "react";

import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Card from './Card';
import Footer from './Footer';

const cards = [
  {
    title: "Labrador",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "https://picsum.photos/id/237/200/200",
    btn: "Labrador",
    info: "https://es.wikipedia.org/wiki/Labrador_retriever",
  },
  {
    title: "Nueva York",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "https://picsum.photos/id/238/200/200",
    btn: "Nueva York",
    info: "https://es.wikipedia.org/wiki/Nueva_York",
  },
  {
    title: "Naturaleza",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "https://picsum.photos/id/239/200/200",
    btn: "Naturaleza",
    info: "https://es.wikipedia.org/wiki/Taraxacum_officinale",
  },
  {
    title: "Vías del tren",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    img: "https://picsum.photos/id/242/200/200",
    btn: "Vías del tren",
    info: "https://es.wikipedia.org/wiki/Tren_de_cercan%C3%ADas",
  },
];

//Home
const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <HeroSection />
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
                    {cards.map((props, index) => (
                        <Card
                            key={index}
                            title={props.title}
                            text={props.text}
                            img={props.img}
                            btn={props.btn}
                            info={props.info}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;