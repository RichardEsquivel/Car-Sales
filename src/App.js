import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
//App.js startes with state but was moved to reducer in reducer/index.js
//Added state back to App with redux import connect
import { connect } from 'react-redux';
//importing action creators
import { removeFeature, buyItem } from './actions';

//Redux will pass props to App
const App = (props) => {
	console.log(props);
	const { state, buyItem, removeFeature } = props;

	//add buyItem function as a prop to AdditionalFeatures
	return (
		<div className="boxes">
			<div className="box">
				<Header car={state.car} />
				<AddedFeatures car={state.car} removeFeature={removeFeature} />
			</div>
			<div className="box">
				<AdditionalFeatures store={state.store} buyItem={buyItem} />
				<Total car={state.car} additionalPrice={state.additionalPrice} />
			</div>
		</div>
	);
};

//will curry connect have function App which we want to connect and the first will be two arguments mStp which will receive state from redux and returns an object which will given to the component as props, the second will be an object full of all of the functions that will be passed as props to the app

//this will return an object to be used as props for App the entire app needs state and we can access
const mapStateToProps = (state) => {
	return {
		state: state
	};
};

//hook up these action creators to dispatch using connect
export default connect(mapStateToProps, { buyItem, removeFeature })(App);
