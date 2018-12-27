/** @format */

import { AppRegistry } from 'react-native';
import App from './screens/App';
import { displayName as appName } from './app.json';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer';
import createSagaMiddleware from 'redux-saga';
import { getPlClubData } from './saga/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(getPlClubData);


export default store;

AppRegistry.registerComponent(appName, () => App);
