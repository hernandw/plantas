import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail]=useState('')
  const[password, setPassword]=useState('')

  const iniciarSesion= async (e)=> {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://plantasbk.onrender.com/login",
        {
          email,
          password,
        }
      );

    if (response.status ===200){
      const {token} = response.data;
      localStorage.setItem("token", token);
      alert("Ingreso correcto")
      navigate("/miperfil")
    } else {
      alert("Hubo un error")
    }
                
    } catch (error) {
      alert('Hubo un error')
      console.log(error.message)
    }
  }
   
 

  return (
    <div>
      <h1 className="text-center mt-5">Iniciar sesion</h1>

      <form className="formulario" >
        
          
        <div className="mb-3 ms-5  me-5 col-xs-4 text-center">
          <label htmlFor="email" className="form-label">Correo electronico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3 ms-5  me-5 col-xs-4 text-center">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="btn btn-success d-grid gap-2 col-6 mx-auto"
          onClick={iniciarSesion}
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;