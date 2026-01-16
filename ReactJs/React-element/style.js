const container = React.createElement('div', { className: 'container' }, [
  React.createElement(
    'section',
    { className: 'section', key: 1 },
    [
      React.createElement('p', { className: 'p', key: 2 }, [
        'Hi I am getting here through React Dom',
      ]),
    ],
    [React.createElement('h1', { className: 'h1', key: 2 }, ['this is h1'])],
    [
      React.createElement(
        'div',
        { key: 1, className: 'insideDiv' },
        [
          React.createElement('p', { key: 2, className: 'p' }, [
            'This is child p inside a div',
          ]),
        ],
        [
          React.createElement('img', {
            key: 2,
            style: { width: 200, borderRadius: 20 },
            src: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*x-HyaNxF4CJW0gSc.png',
          }),
        ],
      ),
    ],
    [
      React.createElement('form', { className: 'form', key: 3 }, [
        React.createElement('div', { key: 1, className: 'input-Group' }, [
          React.createElement(
            'label',
            { key: 1, htmlFor: 'username' },
            'User Name ',
          ),
          React.createElement('input', { key: 2, id: 'username' }),
        ]),
        React.createElement('div', { key: 2, className: 'input-Group' }, [
          React.createElement(
            'label',
            { key: 1, htmlFor: 'password' },
            'Password ',
          ),
          React.createElement('input', {
            key: 2,
            id: 'password',
            type: 'password',
          }),
        ]),
      ]),
    ],
  ),
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(container);
