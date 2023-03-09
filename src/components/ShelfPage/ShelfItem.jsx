import React from 'react';
import { useDispatch } from 'react-redux';

function ShelfItem({ id, description, imageUrl }) {
	console.log(id);
	const dispatch = useDispatch(); 

	const handleDelete = () => {
		dispatch({
			type: 'DELETE_ITEM',
			payload: id
		})
	}


  return (
    <div>
      <img src={imageUrl} alt={description} />
      <p>{description}</p>


	  <button className="deleteButton" onClick={handleDelete}>Delete</button>

    </div>
  );
}

export default ShelfItem;
