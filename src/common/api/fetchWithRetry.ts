import { Options } from '.';
import HTTPTransport from './httpTransport';

export const fetchWithRetry = (
    url: string,
    options: Options = {},
): Promise<XMLHttpRequest | unknown> => {
    const instance = new HTTPTransport();

    const { tries = 1 } = options;

    const onError = (err: unknown) => {
        const triesLeft = tries - 1;

        if (!triesLeft) {
            throw err;
        }

        return fetchWithRetry(url, { ...options, tries: triesLeft });
    };

    return instance.get(url, options).catch(onError);
};
