import React, { useState } from 'react';

export default function Header() {
  const [isDark,setDark] = useState(false)
  return (
    <div className="header-content">
      <h2 className="title-country">
        <a href="/">Where is the world?</a>
      </h2>
      <p onClick={()=> setDark(!setDark)}className={isDark ? 'dark' : ''}>
        <i className="fa-regular fa-moon" />
        &nbsp;Dark Mode
      </p>
    </div>
  );
}
