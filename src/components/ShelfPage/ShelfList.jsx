import React from "react";
import { useSelector } from "react-redux";
import ShelfItem from "./ShelfItem";

function ShelfList() {
	//TODO: useSelector here to get data from store
	const items = useSelector((state) => state.itemsReducer);

	return (
		<div>
			{items.map((item) => (
				<ShelfItem key={item.id} item={item} />
			))}
		</div>
	);
}

export default ShelfList;
