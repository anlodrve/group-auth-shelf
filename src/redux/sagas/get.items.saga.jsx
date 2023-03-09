import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

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

function* addShelfItem(action) {
  try {
      yield axios.post('/api/shelf', action.payload);

      yield put({ type: 'GET_ITEMS' });

  } catch (error) {

      console.log('get all error', error);
  }
      
}

// watcher* Saga:  will watch for 'GET_ITEMS' action
function* watcherSaga() {
  yield takeEvery("GET_ITEMS", getItems);
  yield takeEvery("ADD_ITEM", addShelfItem)
}

export default watcherSaga;

//! COMMENTS:
// takeLatest creates a forked task that cancels the previous task 
// if a new one is started before the first is finished