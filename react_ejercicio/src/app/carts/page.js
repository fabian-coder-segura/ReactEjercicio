"use client"; 
import React, { useEffect, useState } from 'react';


export default function Carts() {
  
  const [carts, setCarts] = useState([]);

 
  useEffect(() => {

    fetch('https://fakestoreapi.com/carts')
      .then(res => res.json()) 
      .then(data => setCarts(data)); 
  }, []); 


  const handleMoreDetails = (cartId) => {
    localStorage.setItem('cartId', cartId.toString());
    window.location.href = 'carts/products';
}
  
  
  return (
    <div className="container">
        <div className="header">
      <h1>Nombre de la Aplicación</h1>
        </div>
        <div className="content">
            <div className="menu">
                <ul>
                    <li>Carts</li>
                    <li>New Carts</li>
                    <li>Products</li>
                    <li>New Products</li>
                </ul>
            </div>
            
            <div className="main">
                <h2>Cartas</h2>
                <div className="containerCarts">
                {carts.map((cart) => (
                    <div key={cart.id} className="carts">
                        <h3>Cart ID: {cart.id}</h3>
                        <p>Usuario ID: {cart.userId}</p>
                        <p>Fecha: {cart.date}</p>
                        <h4>Productos:</h4>
                        <button onClick={() => handleMoreDetails(cart.id)}>Más detalles</button>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    <div className="footer">
     
      © 2023 Desarrollado por Fabian Segura. Todos los derechos reservados.
    </div>
  </div>
  );
}