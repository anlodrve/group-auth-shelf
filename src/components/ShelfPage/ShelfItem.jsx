function ShelfItem() {


	const handleDelete = () => {
		dispatchEvent({
			type: 'DELETE_ITEM',
			payload: id
		})
	}


	



	return ( 
	<>
		<h1>Shelf Item</h1>
			<button className="deleteButton" onClick={handleDelete()}>Delete</button>
	</>
	)
}

export default ShelfItem;
