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

var container = /*#__PURE__*/React.createElement("div", {
  className: "container",
  id: "container"
}, /*#__PURE__*/React.createElement("section", {
  className: "sectionOne"
}, /*#__PURE__*/React.createElement("p", null, "React is beautiful"), /*#__PURE__*/React.createElement("img", {
  className: "img",
  src: "http://tiny.cc/uyux001",
  style: {
    width: 250,
    borderRadius: 8,
    backgroundColor: 'yellow',
    padding: 16
  }
})), /*#__PURE__*/React.createElement("section", {
  className: "sectionTwo"
}, /*#__PURE__*/React.createElement("form", {
  className: "form"
}, /*#__PURE__*/React.createElement("div", {
  className: "inputGroup"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "userName"
}, "User Name "), /*#__PURE__*/React.createElement("input", {
  id: "userName"
})), /*#__PURE__*/React.createElement("div", {
  className: "inputGroup"
}, /*#__PURE__*/React.createElement("label", {
  htmlFor: "Password"
}, " Password "), /*#__PURE__*/React.createElement("input", {
  id: "Password",
  type: "password"
})))));

// const h2 = <h2>Hello JSX</h2>
var root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container);
var user = 'waqar';
//JS code are pass into curley brackets in html tags{user}
var h2 = /*#__PURE__*/React.createElement("h2", null, "hello ", /*#__PURE__*/React.createElement("b", null, user));

// root.render(h2);
// console.log(h2);

// const h2 = document.createElement('h2')
// document.querySelector('#root').append(h2)
// h2.innerText = 'Hello Js'
// console.dir(h2);