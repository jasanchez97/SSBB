import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Crud.css";

function Crud() {

  return (
    <>
      <main className="crud-main">
        <form id="crud-form">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required autocomplete="on" />
          </div>
          <div className="form-group">
            <label for="surname">Apellidos:</label>
            <input type="text" id="surname" name="surname" autocomplete="on" />
          </div>
          <div className="form-group">
            <label for="address">Domicilio:</label>
            <input type="text" id="address" name="address" autocomplete="on" />
          </div>
          <div className="form-group">
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required autocomplete="on" />
          </div>
          <div className="form-group">
            <label for="contact">Contacto:</label>
            <input type="text" id="contact" name="contact" required autocomplete="on" />
          </div>
          <div className="form-group">
            <label for="reason">Motivo por el que se suscribe</label>
            <textarea id="reason" name="reason" required autocomplete="on" rows="5" cols="30"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </main>
    </>
  );
}

export default Crud