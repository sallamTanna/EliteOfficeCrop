import {takeEvery, all} from 'redux-saga/effects';
import {CHANGE_IMAGE} from '../constants/actionTypes';
import ChangeImageName from './imageName.js';

function *watchAll (){
  yield all([takeEvery(CHANGE_IMAGE, ChangeImageName),])
}

export default watchAll;
