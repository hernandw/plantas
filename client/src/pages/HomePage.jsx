import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import Productos from "./Productos";

const HomePage = () => {
  const { dataProducts, setDataProducts } = useContext(MyContext);

  return (
    <div>
      <div>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 fw-normal">Bienvenidos a Plantacenter <span>🪴</span></h1>
            <p className="lead fw-normal">Aquí podrás econtrar las mejores plantas para tu hogar!</p>
           
          </div>
      
      </div>
        <h1>Recomendados para tí</h1>

        <hr></hr>
        <div className="container mt-5">
          <div className="row d-flex justify-content-between gap-5">
            {dataProducts.map((product) => (
              <Productos key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
      );
};

      export default HomePage;
