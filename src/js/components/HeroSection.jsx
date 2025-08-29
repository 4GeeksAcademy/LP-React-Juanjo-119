import React from "react";

const HeroSection = () => {
  return (
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
};

export default HeroSection;