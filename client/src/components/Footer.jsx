import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="container mt-5 bg-success text-white">
    <footer className="py-3 my-4">
      <h2 className="text-center mb-3">Síguenos en nuestras redes sociales</h2>
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Instagram</a></li>
        <i className="fa-brands fa-instagram fa-3x"></i>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Facebook</a></li>
        <i className="fa-brands fa-facebook fa-3x"></i>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Twitter</a></li>
        <i className="fa-brands fa-twitter fa-3x"></i>
        
     </ul>
      <p className="text-center text-body-secondary">&copy; 2023 Company, Inc</p>
    </footer>
  </div>
  

  )
}

export default Footer