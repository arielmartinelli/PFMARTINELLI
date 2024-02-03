import React, { useState } from 'react';

const OrderForm = () => {
  

  return (
    <div className='d-flex align-items-center justify-content-center form'>
      <form className='form-box p-4 text-center'>
        <label className='d-block' htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre"   required />

        <label className='d-block mt-2' htmlFor="correo">Correo:</label>
        <input type="email" id="correo" name="correo"   required />

        <label className='d-block mt-2' htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono"   required />

        <button className='d-block mt-4 mx-auto btn btn-danger' type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
