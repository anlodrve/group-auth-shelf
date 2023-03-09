function ShelfItem() {


	const handleDelete = () => {
		dispatchEvent({
			type: 'DELETE_ITEM',
			payload: id
		})
	}

	// for the watcher sgag
	yield takeEvery('DELETE_ITEM', deleteItem)

	// delete generator function - action.payload is the id
	function* deleteItem(action) {
		try {
			yield axios.delete(`/api/shelf/${action.payload}`)
			//double check the get dispatch name 
			yield put({type: 'GET_ITEMS'})
		} catch (error) {
			
		}
	}



	return ( 
	<>
		<h1>Shelf Item</h1>
			<button className="deleteButton" onClick={handleDelete()}>Delete</button>
	</>
	)
}

export default ShelfItem;
