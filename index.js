/** @format */

import { AppRegistry } from 'react-native';
import App from './screens/App';
import { displayName as appName } from './app.json';
import { createStore } from 'redux';
import reducer from './reducers/reducer';

const store = createStore(reducer);

export default store;

AppRegistry.registerComponent(appName, () => App);
