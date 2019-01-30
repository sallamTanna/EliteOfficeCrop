import {createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from '../sagas';

// const saga = createSagaMiddleware();


const store = createStore(rootReducer,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// saga.run(rootSaga);

export default store;
