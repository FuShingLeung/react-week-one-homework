import React from 'react';
import PetCard from './PetCard';
import { nanoid } from 'nanoid';
import Counter from './Counter';

function List({ items = [], color }) {
  return (
    <div>
      <h2>List of pets!</h2>
      <ul>
        {items.map((pet) => (
          <>
            <Counter />
            <PetCard key={nanoid()} {...pet} color={color} />
          </>
        ))}
      </ul>
    </div>
  );
}

export default List;
