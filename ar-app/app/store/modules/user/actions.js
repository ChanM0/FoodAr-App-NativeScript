// USER ACTIONS
import _user from "../../mutation-types/user";

import Auth from "../../../api/auth/auth";


export default {
	LoginUser(context, UserLoginObject) {
		if (!UserLoginObject.hasOwnProperty("email")) {
			return Error("Email required!");
		}
		if (!UserLoginObject.hasOwnProperty("password")) {
			return Error("Password required!");
		}
		Auth.LoginUser(UserLoginObject.email, UserLoginObject.password, success => {
			context.commit(_user.LOGIN, success.data);
		}, error => {
			// idk what to do
		});
	},
	RegisterUser(context, UserRegisterObject) {
		if (!UserRegisterObject.hasOwnProperty("email")) {
			return Error("Email required!");
		}
		if (!UserRegisterObject.hasOwnProperty("password")) {
			return Error("Password required!");
		}
		if (!UserRegisterObject.hasOwnProperty("username")) {
			return Error("Username required!");
		}
		Auth.CreateUser(UserRegisterObject.email, UserRegisterObject.password, UserRegisterObject.username, success => {
			context.commit(_user.REGISTER, success.data);
		}, error => {
			// idk what to do
		});
	},
	LogoutUser(context) {
		context.commit(_user.LOGOUT);
	},
	GetUserInfo(context) {
		let user = context.getters.user;
		if (user.userId != null) {
			Auth.GetUserInfo(user.userId, success => {
				context.commit(_user.GET_INFO, success.data);
			}, error =>	{
				// idk what to do
			});
		} else {
			return Error("Not Logged In!");;
		}
	}
};
