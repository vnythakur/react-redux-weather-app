import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import ReduxPromise from 'redux-promise';

import App from './component/App';
import rootReducer from './reducer';

const createStoreWithApplyMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
	<Provider store={createStoreWithApplyMiddleware(rootReducer)}>
		<App />
	</Provider>
	, document.getElementById('root'));
