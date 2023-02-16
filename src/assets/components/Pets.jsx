import React from 'react';

function pets({ name, breed, picture, color = 'red' }) {
  return (
    <div
      style={{
        border: `3px solid ${color}`,
        borderRadius: '1em',
      }}
    >
      <h1>{name}</h1>
      <p>{`${name} is a ${breed}!`}</p>
      <img src={picture} alt="" />
    </div>
  );
}

export default pets;
