"use client"; 
import React, { useEffect, useState } from 'react';


export default function Products() {
    const [products, setProducts] = useState([]);
    const productId = Number(localStorage.getItem('cartId'));

    useEffect(() => {
        fetch(`https://fakestoreapi.com/carts/${cartId}`)
            .then(res => res.json())
            .then(cart => {
                setProducts(cart.products);
            });
    }, [productId]);

    const handleBack = () => {
        window.history.back();
    }

    return (
        <div className="products-container">
            <h1>Productos del Carrito {productId}</h1>
            <button onClick={handleBack}>Volver atrás</button>
            <div className="products-list">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        
                        <p>Detalle del producto : {product.productId}</p>
                        <p>Quantity: {product.quantity}</p>
                    
                    </div>
                ))}
            </div>
            <div className="footer">
            © 2023 Desarrollado por Fabian Segura. Todos los derechos reservados.
            </div>
        </div>
    );
}