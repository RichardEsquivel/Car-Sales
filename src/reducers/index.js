//Going to organize all of this inital state into one location for ease of initial management as many parts of this state will need to managed at once

const initialState = {
	additionalPrice: 0,
	car: {
		price: 26395,
		name: '2019 Ford Mustang',
		image:
			'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
		features: []
	},
	store: [
		{ id: 1, name: 'V-6 engine', price: 1500 },
		{ id: 2, name: 'Racing detail package', price: 1500 },
		{ id: 3, name: 'Premium sound system', price: 500 },
		{ id: 4, name: 'Rear spoiler', price: 250 }
	]
};
//In Redux we make initialState the default argument for state and reducer will utilize initial state when not given an argument
const reducer = (state = initialState, action) => {
	console.log('things going on', action);
	switch (action.type) {
		default:
			return state;
	}
}

export default reducer;