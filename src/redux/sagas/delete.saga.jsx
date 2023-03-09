import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

	// for the watcher saga
function* rootSagaDelete() {
    yield takeEvery('DELETE_ITEM', deleteItem)
}

// delete generator function - action.payload is the id
	function* deleteItem(action) {
		try {
			yield axios.delete(`/api/shelf/${action.payload}`)
			//double check the get dispatch name 
			yield put({type: 'GET_ITEMS'})
		} catch (error) {
            console.log('in delete saga', error)
		}
	};

    export default rootSagaDelete