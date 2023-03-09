import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// worker Saga: invoked when 'GET_ITEMS' dispatches
function* getItems() {
  console.log("getItems");
  try {
    const response = yield axios.get("/api/shelf");

    yield put({ type: "SET_ITEMS", payload: response.data });
  } catch (error) {
    console.log("GET_ITEMS request failed", error);
  }
}

// watcher* Saga:  will watch for 'GET_ITEMS' action
function* getItemsSaga() {
  console.log("getItemsSaga");
  yield takeLatest("GET_ITEMS", getItems);
}

export default getItemsSaga;

//! COMMENTS:
// takeLatest creates a forked task that cancels the previous task 
// if a new one is started before the first is finished