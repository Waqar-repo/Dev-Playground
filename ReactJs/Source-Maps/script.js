//  React.createElement(
//   'div',
//   { className: 'container', id: 'container', key: 1 },
//   [
//     React.createElement('section', { className: 'sectionOne', key: 6 }, [
//       React.createElement('p', { key: 2 }, 'React is beautiful'),
//       React.createElement('img', {
//         className: 'img',
//         key: 6,
//         style: {
//           width: 250,
//           borderRadius: 8,
//           backgroundColor: 'yellow',
//           padding: 16,
//         },
//         src: 'http://tiny.cc/uyux001',
//       }),
//     ]),
//     React.createElement('section', { key: 2, className: 'sectionTwo' }, [
//       React.createElement('form', { key: 3, className: 'form' }, [
//         React.createElement('div', { className: 'inputGroup',key:1 }, [
//           React.createElement(
//             'label',{ key: 2, htmlFor: 'userName' },'User Name  ',),
//           React.createElement('input', { key: 1, id: 'userName' }),
//         ]),
//          React.createElement('div', { className: 'inputGroup',key:2 }, [
//           React.createElement( 'label',{ key: 2, htmlFor: 'Password' },'   Password  ',),
//           React.createElement('input', { key: 1, id: 'Password',type:'password' }),
//         ]),
//       ]),
//     ]),
//   ],
// );

// babel is javascript compiler 
// convert jsx into react elements using babel.

const container = (
  <div className="container" id="container">
    <section className="sectionOne">
      <p>React is beautiful</p>
      <img
        className="img"
        src="http://tiny.cc/uyux001"
        style={{
            width: 250,
            borderRadius: 8,
            backgroundColor: 'yellow',
            padding: 16,
              }}
      />
    </section>
    <section className="sectionTwo">
      <form className="form">
        <div className="inputGroup">
          <label htmlFor="userName">User Name </label>
          <input id="userName" />
        </div>
        <div className="inputGroup">
          <label htmlFor="Password"> Password </label>
          <input id="Password" type="password" />
        </div>
      </form>
    </section>
  </div>
);




// const h2 = <h2>Hello JSX</h2>
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container);
console.log(container);


const user = 'waqar'
//JS code are pass into curley brackets in html tags{user}
const h2 = <h2>hello <b>{user}</b></h2>  

// root.render(h2);
// console.log(h2);


// const h2 = document.createElement('h2')
// document.querySelector('#root').append(h2)
// h2.innerText = 'Hello Js'
// console.dir(h2);
