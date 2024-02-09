import React, { useState } from 'react';

const OrderForm = (onConfirm) => {
  
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handleConfirm = (event) =>{
    event.preventDefault()

    const userDate = {
      name, phone, email
    }

    onConfirm(userDate)
  }

  return (
    <div className='d-flex align-items-center justify-content-center form'>
      <form className='form-box p-4 text-center' onSubmit={handleConfirm}>
        <label className='d-block' htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre"  value={name} onChange={({ target }) => setName(target.value)}  required />

        <label className='d-block mt-2' htmlFor="correo">Correo:</label>
        <input type="email" id="correo" name="correo" value={email} onChange={({ target }) => setEmail(target.value)}  required />

        <label className='d-block mt-2' htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono"  value={phone} onChange={({ target }) => setPhone(target.value)} required />

        <button className='d-block mt-4 mx-auto btn btn-danger' type="submit">
          Crear orden
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
