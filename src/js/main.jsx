import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Card from './components/Card';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
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
  </React.StrictMode>,
)
