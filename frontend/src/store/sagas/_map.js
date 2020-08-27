
import {
    POST_PLACE,
    REQUEST,
  } from "../constants";
import {Map} from "../../lib/api";
import { mapAction } from "../actions";
import { call, put, all,fork,takeLatest } from "redux-saga/effects";


export function* fetchPlace({ payload }) {
    try {
      const  data  = yield call(Map.postPlace,payload);
      yield put(mapAction.placeSuccess(data));
  }
    catch(error) {
      alert(error);
    }
  }


export function* watchFetchPlace() {
    yield takeLatest([POST_PLACE[REQUEST]], fetchPlace);
}


export default function*()  {
    yield all([
        fork(watchFetchPlace),
      ]);
}
