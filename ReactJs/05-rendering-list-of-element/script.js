import { createRoot } from 'react-dom/client';
import './style.css';
// const h1 = <h1>Hello World</h1>;

// function Card(key, title, img, brand, price) {
//   return (
//     <div className="card" key={key}>
//       <img src={img} alt="iphone" />
//       <div className="card-content">
//         <h3>{title}</h3>
//         <p>{brand}</p>
//         <p>
//           $ <b>{price}</b>
//         </p>
//       </div>
//     </div>
//   );
// }
// // const container = [Card(1),Card(2),Card(3),Card(4),Card(5)]

// const root = createRoot(document.getElementById('root'));

// // console.log(Card());

// fetch('https://dummyjson.com/products')
//   .then((res) => res.json())
//   .then((data) => {
//     root.render(
//       <div className="container">
//         {data.products.map((product) => {
//           return Card(
//             product.id,
//             product.title,
//             product.thumbnail,
//             product.brand,
//             product.price,
//           );
//         })}
//       </div>,
//     );
//   });

//practice

// id,img ,firstname last name ,role email

function App({ firstName, lastName, image, gender, role, email }) {
  return (
    <div className="card">
      <img src={image} alt="picture" />
      <div className="card-content">
        <p>
          <b>
            {firstName} {lastName}
          </b>
        </p>
        <p>Gender: {gender}</p>
        <p>Role: {role}</p>
        <p> {email}</p>
      </div>
    </div>
  );
}

// const temp = [ app(1),app(2),app(3),app(4) ]
const root = createRoot(document.getElementById('root'));
// root.render(<div className='container'>{temp}</div>)

fetch('https://dummyjson.com/users')
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.users.map((user) => {
          return (
            <App
              key={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              image={user.image}
              gender={user.gender}
              role={user.role}
              email={user.email}
            />
          );
        })}
      </div>,
    );
  });

