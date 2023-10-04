"use client"; 
import React, { useEffect, useState } from 'react';
//import styles from './carts.module.css';
import styles from '../page.module.css';
import Carts from '/Carts';
import NewCarts from '/NewCarts';

export default function NewCarts() {
  
  const [carts, setCarts] = useState([]);

 
  useEffect(() => {

    fetch('https://fakestoreapi.com/carts')
      .then(res => res.json()) 
      .then(data => setCarts(data)); 
  }, []); 

  
  return (
    <div className="container">
        <div className="header">
      <h1>Nombre de la Aplicación</h1>
        </div>
        <div className="content">
            <div className="menu">
                <ul>
                    <li><Link to="/Carts">Carts</Link></li>
                    <li><Link to="/NewCarts">New Carts</Link></li>
                    <li>Products</li>
                    <li>New Products</li>
                </ul>
            </div>
            
            <div className="main">
                <h2>New Cartas</h2>
                <div className="containerCarts">
                <h3>formulario de nuevas cartas</h3>
                </div>
            </div>
        </div>
    <div className="footer">
     
      © 2023 Desarrollado por Fabian Segura. Todos los derechos reservados.
    </div>
  </div>
  );
}