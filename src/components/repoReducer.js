const initialState = {
	data: [],
	loading: false,
	error: null,
};

const repoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_REPOS_REQUEST':
			return {
				...state,
				loading: true,
			};
		case 'FETCH_REPOS_SUCCESS':
			return {
				...state,
				loading: false,
				data: action.payload,
			};
		case 'FETCH_REPOS_ERROR':
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default repoReducer;
