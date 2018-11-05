import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getDataLoaded, getDataError } from '../actions/twitterActions';

const apiUrl = 'https://polar-elf-214323.appspot.com/api';

export function* getData() {
  try {
    // Get tweets data
    const tweets = yield call(axios.get, `${apiUrl}/blockchainag`);
    // Put return value to tweetsData
    yield put(getDataLoaded(tweets.data));
  } catch (error) {
    yield put(getDataError(error));
  }
}

export default function* watchGetDataSaga() {
  yield takeLatest('GET_DATA', getData);
}
