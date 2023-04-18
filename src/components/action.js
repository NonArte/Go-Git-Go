import axios from 'axios';

export const fetchUserRequest = () => {
	return {
		type: 'FETCH_USER_REQUEST',
	};
};

export const fetchUserSuccess = (user) => {
	return {
		type: 'FETCH_USER_SUCCESS',
		payload: user,
	};
};

export const fetchUserError = (error) => {
	return {
		type: 'FETCH_USER_ERROR',
		payload: error,
	};
};

export const fetchReposRequest = () => {
	return {
		type: 'FETCH_REPOS_REQUEST',
	};
};

export const fetchReposSuccess = (repos) => {
	return {
		type: 'FETCH_REPOS_SUCCESS',
		payload: repos,
	};
};

export const fetchReposError = (error) => {
	return {
		type: 'FETCH_REPOS_ERROR',
		payload: error,
	};
};

export const fetchUser = (username) => {
	return (dispatch) => {
		dispatch(fetchUserRequest());
		axios
			.get(`https://api.github.com/users/${username}`)
			.then((response) => {
				const user = response.data;
				dispatch(fetchUserSuccess(user));
			})
			.catch((error) => {
				const errorMessage = error.message;
				dispatch(fetchUserError(errorMessage));
			});
	};
};

export const fetchRepos = (username) => {
	return (dispatch) => {
		dispatch(fetchReposRequest());
		axios
			.get(`https://api.github.com/users/${username}/repos`)
			.then((response) => {
				const repos = response.data;
				dispatch(fetchReposSuccess(repos));
			})
			.catch((error) => {
				const errorMessage = error.message;
				dispatch(fetchReposError(errorMessage));
			});
	};
};
