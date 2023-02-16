import React, { useState } from 'react';

function Counter() {
  const [likes, setLikes] = useState(0);
  return (
    <div>
      <h1>{likes} Likes!</h1>
      <button onClick={() => setLikes((likes) => likes + 1)}>+</button>
      <button onClick={() => setLikes((likes) => likes - 1)}>-</button>
    </div>
  );
}

export default Counter;
