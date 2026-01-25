import { createRoot } from 'react-dom/client';
import './style.css';
import React from 'react';

function Card({title, image, brand, price}) {
//   const {title, image, brand, price} = props;
//   console.log(key);
  return (
    <div className="card" >
      <img src={image} alt="iphone" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));

fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              title={product.title}
              key={product.id}
              brand={product.brand}
              image={product.thumbnail}
              price={product.price}
            />
          );
        })}
      </div>,
    );
  })

