import React from 'react';
import Pets from './Pets';
import { nanoid } from 'nanoid';
import Counter from './Counter';

function list({ items = [] }) {
  return (
    <div>
      <h2>List of pets!</h2>
      <ul>
        {items.map((pet) => (
          <>
            <Counter />
            <Pets key={nanoid()} {...pet} />
          </>
        ))}
      </ul>
    </div>
  );
}

export default list;
