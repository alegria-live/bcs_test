import { takeEvery } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import {listProcessSaga, autoInitListSaga} from './list';

export function* watchList () {
    yield takeEvery(actionTypes.AUTO_INIT_LIST, autoInitListSaga)
    yield takeEvery(actionTypes.LIST_PROCESS, listProcessSaga);
};