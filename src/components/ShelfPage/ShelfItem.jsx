import React from 'react';

function ShelfItem({ id, description, imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt={description} />
      <p>{description}</p>
    </div>
  );
}

export default ShelfItem;
