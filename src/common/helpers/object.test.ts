import { expect } from 'chai';
import { set } from './object';

describe('set function', () => {
    it('Должен возвращать аргумент объекта, если переданный объект не является реальным объектом', () => {
        const notAnObject = null;

        expect(set(notAnObject, '', '1')).to.equal(notAnObject);
    });

    it('Должен выдавать ошибку, если параметр пути не является строкой', () => {
        const path = 123;
        const obj = {};

        // @ts-expect-error
        const fn = () => set(obj, path, 123);

        expect(fn).to.throw(Error);
    });

    it('Следует установить значение по пути', () => {
        const obj = { a: 123, b: { a: 345 } };
        const path = 'b.a';
        const value = 123;

        const result = set(obj, path, value);

        expect(result).to.have.nested.property(path).that.equals(value);
    });

    it('Должен мутировать исходный объект', () => {
        const obj = { a: 123, b: { a: 345 } };
        const path = 'b.a';
        const value = 123;

        const result = set(obj, path, value);

        expect(result).to.equal(obj);
    });
});
