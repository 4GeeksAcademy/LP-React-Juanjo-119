import React from "react";

//Navbar
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Menu React</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_blank" href="https://www.linkedin.com/in/juan-jos%C3%A9-villarejo-c%C3%A9spedes/">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
//HeroSection
const HeroSection = () => (
    <header className="bg-light py-5 rounded my-4">
        <div className="container px-4 text-start">
            <h1 className="display-4 fw-bold">Bienvenido a React</h1>
            <p className="lead mb-4">
                Nuestro objetivo es mantener la documentación actualizada en las versiones principales y no publicamos versiones para cada versión menor o de parche. Cuando se lanza una nueva versión principal, archivamos la documentación de la versión anterior como <strong>x.react.dev.</strong>
            </p>
            <a href="https://es.react.dev/versions" target="_blank" className="btn btn-primary btn-lg">
                I Love React
            </a>
        </div>
    </header>
);
//Card
const Card = ({ title, text, img, btn, info }) => {
    return (
        <div className="col mb-4">
            <div className="card h-100 text-center">
                <img src={img} className="card-img-top" alt={title} />
                <div className="card-body bg-light">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <a href={info} className="btn btn-primary" target="_blank">{btn}</a>
                </div>
            </div>
        </div>
    );
};
//Footer
const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-4 mt-auto">
            <div className="container-fluid">
                <p className="mb-0">
                    <strong>Jota Full Stack Developer 2025 @ 4Geek Academy</strong>
                </p>
            </div>
        </footer>
    );
};
//Home
const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <HeroSection />
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
                    <Card
                        title="Labrador"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        img="https://picsum.photos/id/237/200/200"
                        btn="Labrador"
                        info="https://es.wikipedia.org/wiki/Labrador_retriever"
                    />
                    <Card
                        title="Nueva York"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        img="https://picsum.photos/id/238/200/200"
                        btn="Nueva York"
                        info="https://es.wikipedia.org/wiki/Nueva_York"
                    />
                    <Card
                        title="Naturaleza"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        img="https://picsum.photos/id/239/200/200"
                        btn="Naturaleza"
                        info="https://es.wikipedia.org/wiki/Taraxacum_officinale"
                    />
                    <Card
                        title="Vías del tren"
                        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                        img="https://picsum.photos/id/242/200/200"
                        btn="Vías del tren"
                        info="https://es.wikipedia.org/wiki/Tren_de_cercan%C3%ADas"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;