import { call, put, takeLatest, delay } from "redux-saga/effects";
import { fetchGenres, fetchGenresError, fetchGenresSuccess } from "./genresSlice";
import { getGenres } from "./genresApi";
import { demoDelay } from "../demoDelay";

const convertGenresArrayToObject = genres => genres.reduce(
    (accumulator, {id, name }) =>
    ({
        ...accumulator,
        [id]: name,
    }),
);

function* fetchGenresHandler(){
    yield delay (demoDelay);

    try {
        const genresResponse = yield call(getGenres);

        yield put(fetchGenresSuccess(convertGenresArrayToObject(genresResponse.genres)));
    } catch(error) {
        yield put(fetchGenresError());
    }
}

export function* watchFetchGenres() {
    yield takeLatest(fetchGenres.type, fetchGenresHandler);
}