import sinon, { SinonFakeXMLHttpRequestStatic, SinonFakeXMLHttpRequest } from 'sinon';
import { expect } from 'chai';

import { HTTPTransport } from '.';
import { API_URL } from '../../app/global';

describe('HTTPTransport', () => {
    let xhr: SinonFakeXMLHttpRequestStatic;
    let instance: HTTPTransport;

    const requests: SinonFakeXMLHttpRequest[] = [];

    beforeEach(() => {
        xhr = sinon.useFakeXMLHttpRequest();

        // @ts-expect-error
        global.XMLHttpRequest = xhr;

        xhr.onCreate = (req) => {
            requests.push(req);
        };

        instance = new HTTPTransport('');
    });

    afterEach(() => {
        requests.length = 0;
        xhr.restore();
    });

    it('Метод get() должен вызываться с GET методом', () => {
        instance.get('/');

        const [request] = requests;

        expect(request.method).to.equal('GET');
    });

    it('Метод post() должен вызываться с POST методом', () => {
        instance.post('/');

        const [request] = requests;

        expect(request.method).to.equal('POST');
    });

    it('метод get вставялет url параметры в с запрос', () => {
        const queryParams = {
            param1: 'value1',
            param2: 'value2',
        };

        instance.get('/', { data: queryParams });

        const [request] = requests;
        const expectedUrl = `${API_URL}/?param1=value1&param2=value2`;

        expect(request.url).to.equal(expectedUrl);
    });

    it('Метод get вставляет headers в запрос', () => {
        const headers = {
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: 'Bearer token',
        };

        instance.get('/', { headers });

        const [request] = requests;

        expect(request.requestHeaders['Content-Type']).to.equal('application/json;charset=utf-8');
        expect(request.requestHeaders.Authorization).to.equal('Bearer token');
    });

    it('Метод put() должен вызываться с put методом', () => {
        instance.put('/');

        const [request] = requests;

        expect(request.method).to.equal('PUT');
    });

    it('Метод delete() должен вызываться с delete методом', () => {
        instance.delete('/');

        const [request] = requests;

        expect(request.method).to.equal('DELETE');
    });

    it('Метод patch() должен вызываться с patch методом', () => {
        instance.patch('/');

        const [request] = requests;

        expect(request.method).to.equal('Patch');
    });
});
