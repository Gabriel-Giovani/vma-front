import StorageService from './storage';

export default class AuthService {
    static setAuthData(authData) {
        localStorage.setItem('authData', JSON.stringify(authData));
    }

    static Login(authData, redirect = true) {
        AuthService.setAuthData(authData);

        if(redirect)
            window.location.href = '/admin/home';
        else
            window.location.reload();
    }

    static Logout() {
        localStorage.removeItem('authData');
        window.location.href = '/admin/login';
        
        return null;
    }

    static getAuthData() {
        return JSON.parse(localStorage.getItem('authData'));
    }

    static getUserSettings() {
        const userData = StorageService.get('authData');
        const { settings } = userData;

        return settings ? settings : { fixUnread: false };
    }

    static setUserSettings(updateSettings) {
        const userData = StorageService.get('authData');
        let { settings } = userData;

        settings = { ...settings, ...updateSettings };
        userData.settings = settings;
        StorageService.set('authData', userData);
    }

    static userId() {
        return this.getAuthData().id;
    }

    static userStatus() {
        return this.getAuthData().status;
    }
}