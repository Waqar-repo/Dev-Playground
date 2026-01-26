import { createRoot } from 'react-dom/client';
import './style.css';
import React, { Children } from 'react';

function Card({ title, image, brand, price }) {
  //   const {title, image, brand, price} = props;
  //   console.log(key);
  return (
    <div className="card">
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

// function Card2(){
//   return <h1>Hello word</h1>
// }

// console.log(Card2());

// console.log(

//   React.createElement(Card, {
//     title: 'Iphone',
//     brand: 'Apple',
//     image:
//       'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
//       key:2,
//       price:12
//   })
// )

// root.render(
//   <Card
//     title="Iphone"
//     image="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
//     brand="Apple"
//     price="899"
//   />,
// );

// console.log(<Card title = 'Iphone' image='https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp' brand = 'Apple' price = '899'/>);
