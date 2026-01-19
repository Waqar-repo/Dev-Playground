const container = React.createElement(
  'div',
  { className: 'container', id: 'container', key: 1 },
  [
    React.createElement('section', { className: 'sectionOne', key: 6 }, [
      React.createElement('p', { key: 2 }, 'React is beautiful'),
      React.createElement('img', {
        className: 'img',
        key: 6,
        style: {
          width: 250,
          borderRadius: 8,
          backgroundColor: 'yellow',
          padding: 16,
        },
        src: 'http://tiny.cc/uyux001',
      }),
    ]),
    React.createElement('section', { key: 2, className: 'sectionTwo' }, [
      React.createElement('form', { key: 3, className: 'form' }, [
        React.createElement('div', { className: 'inputGroup',key:1 }, [
          React.createElement(
            'label',{ key: 2, htmlFor: 'userName' },'User Name  ',),
          React.createElement('input', { key: 1, id: 'userName' }),
        ]),
         React.createElement('div', { className: 'inputGroup',key:2 }, [
          React.createElement( 'label',{ key: 2, htmlFor: 'Password' },'   Password  ',),
          React.createElement('input', { key: 1, id: 'Password',type:'password' }),
        ]),
      ]),
    ]),
  ],
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(container);

// const h2 = document.createElement('h2')
// document.querySelector('#root').append(h2)
// h2.innerText = 'Hello Js'
// console.dir(h2);
