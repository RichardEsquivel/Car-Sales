//creating action creators

//These will returning objects that will be used as the action the payload receive will be the feature object from store: [ {id: etc.}]. Will also export these action creators

export const removeFeature = feature => {
	return {
		type: "REMOVE_FEATURE",
		payload: feature
	};
};

export const buyItem = item => {
	return {
		type: "BUY_FEATURE",
		payload: item
	}

};