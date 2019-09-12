import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//importing create store from the redux library Provider from react-redux and reducer from which has allowed to connect reducer and our initial state
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

//passing in reducer to createStore
const store = createStore(reducer);

//Wrap App in Provider and give store as a prop to connect store and have it provide that to application, by wrapping we have Provided the react store everywhere into the application
const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, rootElement);