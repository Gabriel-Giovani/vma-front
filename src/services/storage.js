export default class StorageService {
    static get(key) {
        let result = localStorage.getItem(key);

        if(result)
            return JSON.parse(result);

        return false;
    }

    static set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static del(key) {
        localStorage.removeItem(key);
    }
}