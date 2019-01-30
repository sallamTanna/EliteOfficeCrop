import {combineReducers} from 'redux';
import imageReducer from './image';

const rootReducer = combineReducers({
  imageState : imageReducer,
})

export default rootReducer;
