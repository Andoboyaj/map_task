import { all } from "redux-saga/effects";
import requestsListSaga from "./requestsList/sagas";

export default function* rootSaga() {
  yield all([requestsListSaga()]);
}
