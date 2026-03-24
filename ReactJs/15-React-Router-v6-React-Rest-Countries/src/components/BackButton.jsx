import React from 'react';
import { Link } from 'react-router';

export default function BackButton() {
  return (
    <>
      <button onClick={() => window.history.back()} className="BackButton">
        Back
      </button>

      {/* <a href="/" className='BackButton'><button>Back</button></a> */}
    </>
  );
}
