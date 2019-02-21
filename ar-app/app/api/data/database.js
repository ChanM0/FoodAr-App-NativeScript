import config from "./config";
import axios from "axios";

const instance = axios.create({
	baseURL: config.API_URL,
	timeout: 2000,
	headers: {

	},
	params: {

	}
});

const GetMenus = function(success, error) {
	let data = {

	};
	
	instance.get(config.MENUS, data).then( response => {
		success(response.data);
	}, err => {
		error(err);
	}).catch( error => {
		error(error);
	});
};

const GetRestaurants = function(success, error) {
	let data = {
		
	};
	
	instance.get(config.RESTAURANTS, data).then( response => {
		success(response.data);
	}, err => {
		error(err);
	}).catch( error => {
		error(error);
	});
};

const GetReviews = function(success, error) {
	let data = {
		
	};
	
	instance.get(config.REVIEWS, data).then( response => {
		success(response.data);
	}, err => {
		error(err);
	}).catch( error => {
		error(error);
	});
};

export default {
	GetMenus,
	GetRestaurants,
	GetReviews,
	
};