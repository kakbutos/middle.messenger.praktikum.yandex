import HTTPTransport from './httpTransport';
import { fetchWithRetry } from './fetchWithRetry';

export const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
} as const;

export interface Options {
	timeout?: number;
	data?: any;
	headers?: Record<string, string>;
	method?: keyof typeof METHODS;
	tries?: number;
}

export {
    HTTPTransport,
    fetchWithRetry,
};
