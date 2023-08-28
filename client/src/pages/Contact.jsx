import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className='container'>
                <h1 className='mt-5'>Contáctanos</h1>

                <div className='container mt-3'>

                    <label className="form-label d-flex justify-content-center">Nombre</label>
                    <input type="email" className='form-control' placeholder="Nombre completo" />
                </div>

                <div className='container mt-3'>

                    <label className="form-label d-flex justify-content-center">Correo electronico</label>
                    <input type="email" className='form-control' placeholder="name@example.com" />
                </div>

                <div className='container mt-3'>

                    <label className="form-label d-flex justify-content-center">Mensaje</label>
                    <textarea class="form-control" rows="3"></textarea>
                </div>

                <div className='d-flex justify-content-center mt-3'>
                    <button className='btn btn-success d-flex justify-content-center'>Enviar</button>
                </div>

            </div>

        </div>
    )
}

export default Contact
