import { METHODS, Options } from '.';

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

    get<Response>(path: string, options: Options = {}): Promise<Response> {
        return this.request(`${this.endpoint}${path}`, {
            ...options,
            method: METHODS.GET,
        }, options.timeout);
    }

    post<Response = void>(path: string, options: Options = {}): Promise<Response> {
        return this.request(`${this.endpoint}${path}`, {
            ...options,
            method: METHODS.POST,
        }, options.timeout);
    }

    put<Response = void>(path: string, options: Options = {}): Promise<Response> {
        return this.request(`${this.endpoint}${path}`, {
            ...options,
            method: METHODS.PUT,
        }, options.timeout);
    }

    patch<Response = void>(path: string, options: Options = {}): Promise<Response> {
        return this.request(`${this.endpoint}${path}`, {
            ...options,
            method: METHODS.Patch,
        }, options.timeout);
    }

    delete <Response>(path: string, options: Options = {}): Promise<Response> {
        return this.request<Response>(`${this.endpoint}${path}`, {
            ...options,
            method: METHODS.DELETE,
        }, options.timeout);
    }

    private request<Response>(
        url: string,
        options: Options = {},
        timeout = 5000,
    ): Promise<Response> {
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

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status < 400) {
                        resolve(xhr.response);
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onabort = () => reject(new Error('abort'));
            xhr.onerror = () => reject(new Error('network error'));

            xhr.timeout = timeout;
            xhr.ontimeout = () => reject(new Error('timeout'));

            xhr.withCredentials = true;
            xhr.responseType = 'json';

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
