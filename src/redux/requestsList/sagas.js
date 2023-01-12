import { takeLatest, put, call } from "redux-saga/effects";

import { getPathDetails, setPathDetails } from "./requestsSlice";

import osrmApi from "../../services/osrmApi";

import { createCoordsString } from "./helper";

const polyUtil = require('polyline-encoded');


function* getPathByCoords({ payload: { coordFrom, coordTarget } }) {
  try {
    const {routes} = yield call(() =>
      osrmApi.getPathInfo(createCoordsString(coordFrom, coordTarget))
    );
    const decoded = polyUtil.decode(routes[0].geometry, 5)
    yield put(setPathDetails(decoded));
  } catch (err) {
    console.log(err);
  }
}

export default function* requestsListSaga() {
  yield takeLatest(getPathDetails.type, getPathByCoords);
}
