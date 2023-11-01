import { METHODS, Options } from '.';

type HTTPMethod = (path: string, options?: Options) => Promise<XMLHttpRequest | unknown>;

const queryStringify = (data: undefined | Record<string, unknown>) => {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }

    const keys = Object.keys(data);

    return keys.reduce((result, key, index) => {
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
    }, '?');
};

class HTTPTransport {
    static API_URL = 'https://ya-praktikum.tech/api/v2';

    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
    }

    get: HTTPMethod = (path, options = {}) => {
        return this.request(`${this.endpoint}${path}`, {
            ...options,
            method: METHODS.GET,
        }, options.timeout);
    };

    post: HTTPMethod = (path, options = {}) => {
        return this.request(`${this.endpoint}${path}`, {
            ...options,
            method: METHODS.POST,
        }, options.timeout);
    };

    put: HTTPMethod = (path, options = {}) => {
        return this.request(`${this.endpoint}${path}`, {
            ...options,
            method: METHODS.PUT,
        }, options.timeout);
    };

    patch: HTTPMethod = (path, options = {}) => {
        return this.request(`${this.endpoint}${path}`, {
            ...options,
            method: METHODS.Patch,
        }, options.timeout);
    };

    delete: HTTPMethod = (path, options = {}) => {
        return this.request(`${this.endpoint}${path}`, {
            ...options,
            method: METHODS.DELETE,
        }, options.timeout);
    };

    request = (url: string, options: Options = {}, timeout = 5000) => {
        const { headers = {}, method, data } = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject(new Error('No method'));
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.GET;

            xhr.open(
                method,
                isGet && !!data
                    ? `${url}${queryStringify(data)}`
                    : url,
            );

            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = function resolved() {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            xhr.withCredentials = true;

            if (isGet || !data) {
                xhr.send();
            } else if (data instanceof FormData) {
                xhr.send(data);
            } else {
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify(data));
            }
        });
    };
}

export default HTTPTransport;
