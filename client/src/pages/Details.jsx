import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MyContext } from '../context/MyContext'
import { productos } from "../data/getDataProduct"

const Details = () => {

  const { dataProducts } = useContext(MyContext)

  const { id } = useParams();
  const productDetail = dataProducts.find(item => item.id == id)



  return (
   

      <div className='container d-flex justify-content-center'>
        <div className='container row d-flex justify-content gap-3 mt-5'>
          <div style={{ width: "500px" }}>
            <img src={productDetail.image} className="card-img-top" alt="..." />
          </div>
          <div className="card-detail row" style={{ width: "500px" }}>
            <h3>{productDetail.title}</h3>
            <hr />
            <p>Descripción: {productDetail.description}</p>
            <h2>Precio: {productDetail.price}</h2>
            <button className='btn btn-success mt-3 ms-5'>Añadir</button>
          </div>
        </div>

      </div>
        )
}

export default Details