import React from 'react';

function ShelfItem({ id, description, imageUrl }) {

	const handleDelete = () => {
		dispatchEvent({
			type: 'DELETE_ITEM',
			payload: id
		})
	}
  return (
    <div>
      <img src={imageUrl} alt={description} />
      <p>{description}</p>

	  <button className="deleteButton" onClick={handleDelete()}>Delete</button>

    </div>
  );
}

export default ShelfItem;
