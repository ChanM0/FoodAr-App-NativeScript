import config from "./config";
import axios from "axios";

const instance = axios.create({
	baseURL: config.API_URL,
	timeout: 1000,
	headers: {

	},
	params: {
		"key": config.API_KEY
	}
});

const CreateUser = function(email, password, username, success, error) {
	let data = {
		"email": email,
		"password": password,
		"username": username,
		"returnSecureToken": true
	};
	
	instance.post(config.SIGNUP, data).then( response => {
		success(response.data);
	}, err => {
		error(err);
	}).catch( error => {
		error(error);
	});
};

const LoginUser = function(email, password, success, error) {
	let data = {
		"email": email,
		"password": password,
		"returnSecureToken": true
	};

	instance.post(config.VERIFY_PASS, data).then( response => {
		success(response.data);
	}, err => {
		error(err);
	}).catch( error => {
		error(error);
	});
};

const GetUserInfo = function(idToken, success, error) {
	let data = {
		"idToken": idToken
	};

	instance.post(config.GET_INFO, data).then( response => {
		success(response.data);
	}, err => {
		error(err);
	}).catch( error => {
		error(error);
	});
};

const UpdateUserInfo = function(idToken, displayName, photoUrl, success, error) {
	let data = {
		"idToken": idToken,
		"displayName": displayName,
		"photoUrl": photoUrl
	};

	instance.post(config.SET_INFO, data).then( response => {
		success(response.data);
	}, err => {
		error(err);
	}).catch( error => {
		error(error);
	});
};

const ChangeUserPassword = function(idToken, password, success, error) {
	let data = {
		"idToken": idToken,
		"password": password,
		"returnSecureToken": true
	};

	instance.post(config.SET_INFO, data).then( response => {
		success(response.data);
	}, err => {
		error(err);
	}).catch( error => {
		error(error);
	});
};

export default {
	CreateUser,
	LoginUser,
	GetUserInfo,
	UpdateUserInfo,
	ChangeUserPassword
};