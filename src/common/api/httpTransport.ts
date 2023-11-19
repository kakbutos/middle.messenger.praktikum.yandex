import { METHODS, Options } from '.';
import { API_URL } from '@/app/global';

type HTTPMethod = <R=unknown>(url: string, options?: Options) => Promise<R>;

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
    protected endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = `${API_URL}${endpoint}`;
    }

    get: HTTPMethod = (path: string, options: Options = {}) => {
        let url = `${this.endpoint}${path}`;

        if (options && !!options.data) {
            url = `${url}${queryStringify(options.data)}`;
        }

        return this.request(url, {
            ...options,
            method: METHODS.GET,
        }, options.timeout);
    };

    post: HTTPMethod = (path: string, options: Options = {}) => {
        return this.request(`${this.endpoint}${path}`, {
            ...options,
            method: METHODS.POST,
        }, options.timeout);
    };

    put: HTTPMethod = (path: string, options: Options = {}) => {
        return this.request(`${this.endpoint}${path}`, {
            ...options,
            method: METHODS.PUT,
        }, options.timeout);
    };

    patch: HTTPMethod = (path: string, options: Options = {}) => {
        return this.request(`${this.endpoint}${path}`, {
            ...options,
            method: METHODS.Patch,
        }, options.timeout);
    };

    delete: HTTPMethod = (path: string, options: Options = {}) => {
        return this.request(`${this.endpoint}${path}`, {
            ...options,
            method: METHODS.DELETE,
        }, options.timeout);
    };

    private request<Response>(
        url: string,
        options: Options = {},
        timeout = 5000,
    ): Promise<Response> {
        const {
            headers = {}, method, data, responseType = 'json',
        } = options;

        return new Promise((resolve, reject) => {
            if (!method) {
                reject(new Error('No method'));
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.GET;

            xhr.open(method, url);

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status < 400) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            xhr.onabort = () => reject(new Error('abort'));
            xhr.onerror = () => reject(new Error('network error'));
            xhr.ontimeout = () => reject(new Error('timeout'));

            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.timeout = timeout;
            xhr.withCredentials = true;
            xhr.responseType = responseType;

            if (isGet || !data) {
                xhr.send();
            } else if (data instanceof FormData) {
                xhr.send(data);
            } else {
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify(data));
            }
        });
    }
}

export default HTTPTransport;
