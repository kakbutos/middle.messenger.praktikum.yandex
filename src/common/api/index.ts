import HTTPTransport from './httpTransport';
import { fetchWithRetry } from './fetchWithRetry';

export const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    Patch: 'Patch',
    DELETE: 'DELETE',
} as const;

export interface Options {
	responseType?: '' | 'arraybuffer' | 'blob' | 'document' | 'json' | 'text';
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
