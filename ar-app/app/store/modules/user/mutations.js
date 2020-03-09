import _user from "../../mutation-types/user";
import { stat } from "fs";

export default {
	[_user.LOGIN] (state, payload) {
		state.idToken = payload.idToken;
		state.refreshToken = payload.refreshToken;
		state.expiration = Date.now() + payload.expiresIn;
		state.user.userId = payload.localId;
	},

	[_user.LOGOUT] (state) {
		state.idToken = null;
		state.refreshToken = null;
		state.expiration = null;
		state.user.userId = null;
		state.user.email = null;
		state.user.displayName = null;
		state.user.photoUrl = null;
	},

	[_user.REGISTER] (state, payload) {
		state.idToken = payload.idToken;
		state.refreshToken = payload.refreshToken;
		state.expiration = Date.now() + payload.expiresIn;
		state.user.userId = payload.localId;
	},

	[_user.REFRESH_TOKEN] (state, payload) {
		state.idToken = payload.idToken;
		state.refreshToken = payload.refreshToken;
		state.expiration = Date.now() + payload.expiresIn;
	},

	[_user.GET_INFO] (state, payload) {
		state.user.email = payload.email;
		state.user.displayName = payload.displayName;
		state.user.photoUrl = payload.photoUrl;
	}
}