import axios from 'axios';
import { API_BASE_URL, API_ERRORS } from '../helpers/constants';
import { message } from 'antd';
import AuthService from './auth';

const sendExpiredSession = () => {
	message.info("Sua sessão expirou. Por favor, faça login novamente!");
	setTimeout(() => {
		AuthService.Logout();
	}, 3000);
	return null;
};

/*const reAuth = (data: any) => {
	Auth.Login(data, false);
	message.info("Sua sessão foi atualizada! Recarregando...");
};*/

axios.interceptors.request.use(
	async (request) => {
		let authData = AuthService.getAuthData();

		return {
			...request,
			baseURL: `${API_BASE_URL}/`,
			headers: {
				...request.headers,
				token: authData && authData.token ? authData.token : null,
			},
			data: request.data ? {
				...request.data,
			} : {},
		};
	}
);

const responseError = (err) => {
	if (err.response && err.response.status === 404) {
		message.error('O Servidor não retornou nenhuma resposta.');
	} else if (!err.response || err.response.status >= 500) {
		message.error('Não foi possível se conectar com o servidor.');
	} else if (err.response) {
		const { data } = err.response;
		const { success, payload } = data;
		if (!success && payload) {
			const { message } = payload;

			switch (message) {
				case "INVALID_TOKEN": { return sendExpiredSession(); }
				case "TOKEN_EXPIRED": { return sendExpiredSession(); }
				// case "TOKEN_UPDATED": { return reAuth(data.authData); }
			}
		}
	}
	return false;
};

export const get = async (url, params) => {
	try {
		let res = await axios.get(url, params ? params : {});
		return handleResponse(res);
	} catch (err) {
		return responseError(err);
	}
};

export const post = async (url, data, params) => {
	try {
		let res = await axios.post(url, data, params ? params : {});
		return handleResponse(res);
	} catch (err) {
		return responseError(err);
	}
};

export const put = async (url, data, params) => {
	try {
		let res = await axios.put(url, data, params ? params : {});
		return handleResponse(res);
	} catch (err) {
		return responseError(err);
	}
};

export const del = async (url, params) => {
	try {
		let res = await axios.delete(url, params ? params : {});
		return handleResponse(res);
	} catch (err) {
		return responseError(err);
	}
};

export const handleResponse = async (res) => {
	if (res && res.data) {
		const data = res.data;
		const { success, payload } = data;
		if (success) {
			return payload;
		} else {
			handleResponseErr(payload);
		}
	}

	return false;
};

export const handleResponseErr = async (errPayload) => {
	if (errPayload) {
		let { message: _message } = errPayload;

		if (typeof _message === "object")
			_message = _message.name;

		let msg = API_ERRORS[_message];
		if (msg)
			message.error(msg);
		else message.error(API_ERRORS['UNKNOWN']);
	}
};