import React from 'react';

function PetCard({ name, breed, picture, color }) {
  return (
    <div
      style={{
        border: `3px solid ${color}`,
        borderRadius: '1em',
      }}
    >
      <h1>{name}</h1>
      <p>{`${name} is a ${breed}!`}</p>
      <img src={picture} alt="" height="200px" />
    </div>
  );
}

export default PetCard;
