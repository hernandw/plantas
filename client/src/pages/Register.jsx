import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios"

const Register = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [direccion, setDireccion] = useState('')
  const [password, setPassword] = useState('')

  const registrarUsuario=async()=>{
    try {
      const body = { nombre, email, direccion, password }
      console.log('cuerpo', body)
      await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      alert('Usuario creado con exito')
      window.location = '/'
    } catch (error) {
      alert('Hubo un error')
      console.log(error.message)
    }
  }
  
  

  return (
    <div>
      <h1 className="text-center mt-5">Registrarse</h1>

      <form
        className="formulario row d-flex justify-content-center"
        
      >
        

        <div className="mb-3 ms-5  me-5 col-xs-4 text-center">
          <label className="form-label ">Nombre</label>
          <input
            type="name"
            className="form-control"
            id="name"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-3 ms-5  me-5 col-xs-4 text-center">
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Ingresa tu correo electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3 ms-5  me-5 col-xs-4 text-center">
          <label className="form-label">Dirección</label>
          <input
            type="adress"
            className="form-control"
            id="adress"
            placeholder="Ingresa tu dirección"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>

        <div className="mb-3 ms-5  me-5 col-xs-4 text-center">
          <label className="form-label">Contraseña</label>
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
          onClick={registrarUsuario}
        >
          Registrarme
        </button>
      </form>
    </div>
  );
};

export default Register;