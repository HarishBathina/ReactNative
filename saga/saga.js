import 'regenerator-runtime/runtime';
import { delay } from 'redux-saga';
import axios from "axios";
import { takeEvery, put, takeLatest } from 'redux-saga/effects';


export function* getPlClubData() {

    yield takeEvery('GET_CLUB_DETAILS', getclubAsync);
}

function* getclubAsync() {
    yield (fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.clubs.json')
        .then((response) => response.json())
        .then(responseJson => {
            clubName = responseJson.clubs[1].name;
            clubList = responseJson.clubs;
        })
        .catch(error => {
            alert(error);
        }));
    // yield delay(1000);
    yield put({ type: 'CLUB_NAMES', payload: clubList });
}