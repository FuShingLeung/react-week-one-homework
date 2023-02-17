import React from 'react';
import PetCard from './PetCard';
import { nanoid } from 'nanoid';
import Counter from './Counter';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function PetList({ items = [], petBorderColors = [] }) {
  console.log(petBorderColors);
  return (
    <div>
      <h2>List of pets!</h2>
      <ul>
        {items.map((pet) => (
          <>
            <Counter />
            <PetCard
              key={nanoid()}
              {...pet}
              color={
                petBorderColors[
                  getRandomIntInclusive(0, petBorderColors.length - 1)
                ]
              }
            />
          </>
        ))}
      </ul>
    </div>
  );
}

export default PetList;
