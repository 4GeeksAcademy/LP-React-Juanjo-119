import React from "react";

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
export default Card;