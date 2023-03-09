import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

// worker Saga: invoked when 'GET_ITEMS' dispatches
function* getItems() {
	try {
		const response = yield axios.get("/api/shelf");
		yield put({ type: "SET_ITEMS", payload: response.data });
	} catch (error) {
		console.log("Error in getting items", error);
	}
}

function* addShelfItem(action) {
	try {
		yield axios.post("/api/shelf", action.payload);
		yield put({ type: "GET_ITEMS" });
	} catch (error) {
		console.log("Error in getting items", error);
	}
}

// watcher* Saga:  will watch for 'GET_ITEMS' action
function* getItemsSaga() {
	yield takeEvery("ADD_ITEM", addShelfItem);
	yield takeEvery("GET_ITEMS", getItems);
}

export default getItemsSaga;

//! COMMENTS:
// takeLatest creates a forked task that cancels the previous task
// if a new one is started before the first is finished
