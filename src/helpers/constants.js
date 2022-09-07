export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL ? process.env.REACT_APP_API_BASE_URL : 'http://localhost:8099';

export const IN_PROD = process.env.REACT_APP_ENV === 'production';
export const IN_DEV = process.env.REACT_APP_ENV === 'development';

export const DATE_FORMAT_DEFAULT = 'DD/MM/YYYY';
export const DATETIME_FORMAT_DEFAULT = 'DD/MM/YYYY HH:mm:ss';
export const DATETIME_FORMAT_SHORT = 'DD/MM/YYYY HH:mm';

export const API_ERRORS = {
	UNKNOWN: 'Ops! Algo deu errado. Tente novamente mais tarde!',
	NO_USERNAME: 'O usuário é obrigatório!',
	NO_PASSWORD: 'A senha é obrigatória!',
	INVALID_USERNAME: 'Usuário não existe ou a senha está incorreta.',
	INVALID_PASSWORD: 'Usuário não existe ou a senha está incorreta.',
	INVALID_LOGIN: 'Usuário não existe ou a senha está incorreta.',
	USER_NOT_FOUND: 'Usuário não encontrado.',
	USER_NOT_CONNECTED: 'Verifique sua conexão e tente novamente!',
};