import React from 'react';

export default function Header() {
  return (
    <div className="header-content">
      <h2 className="title-country">
        <a href="/">Where is the world?</a>
      </h2>
      <p>
        <i className="fa-regular fa-moon" />
        &nbsp;Dark Mode
      </p>
    </div>
  );
}
