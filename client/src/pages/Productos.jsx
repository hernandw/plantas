import React from "react";
import { useNavigate } from "react-router-dom";

const Productos = ({ id, price, title, image, description }) => {
  const navigate = useNavigate();

  const HandleClick = () => {
    navigate(`product/${id}`);
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price}</p>
          <button className="btn btn-success" onClick={HandleClick}>
            Ver más
          </button>
        </div>
      </div>
    </>
  );
};

export default Productos;
