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
		case "BUY_FEATURE":
			//if then find shows that features.id is equivalent to to the payload(the feature is already added to the car) then it will not alter but just return current state and not add that feature from the onClick dispatch
			if (state.car.features.find(item => item.id === action.payload.id)) {
				return state;
			} else {
				return {
					//state is an object that we want to modify one key out of, we want to take one of the feature objects out of store: [] and place it into car { features:[]} if we spread out state and then spread out new car object and then modify features array and then pass in the payload from dispatch
					...state,
					car: {
						...state.car, features: [...state.car.features, action.payload]
					}
				}
			}
		case "REMOVE_FEATURE":
			return {
				...state,
				car: {
					...state.car,
					features: state.car.features.filter(feature => (
						feature.id !== action.payload.id))
				}
			}
		default:
			return state;
	}
}

export default reducer;