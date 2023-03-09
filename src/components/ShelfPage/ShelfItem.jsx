import React from "react";
import { useDispatch, useSelector } from "react-redux";

function ShelfItem({ item }) {
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);
	const { id, description, imageUrl, user_id } = item;

	const handleDelete = (e) => {
		e.preventDefault();

		dispatch({
			type: "DELETE_ITEM",
			payload: id,
		});
	};

	console.log(user);
	return (
		<div>
			<img src={imageUrl} alt={description} />
			<p>{description}</p>

			{user.id === user_id && (
				<button className="deleteButton" onClick={handleDelete}>
					Delete
				</button>
			)}
		</div>
	);
}

export default ShelfItem;
