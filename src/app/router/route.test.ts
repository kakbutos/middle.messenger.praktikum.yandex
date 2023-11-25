import sinon from 'sinon';
import { assert } from 'chai';
import Block from '../../common/block/block';
import { Route } from './route';

describe('Route', () => {
	let block: Block<{}>;
	let route: Route;
	let querySelectorStub: sinon.SinonStub<[selectors: string], Element | null>;

	beforeEach(() => {
		block = new Block({});
		route = new Route('/path', Block, '#app');
		querySelectorStub = sinon.stub(document, 'querySelector').returns(document.createElement('div'));
	});

	afterEach(() => {
		sinon.restore();
	});

	it('должно соответствовать указанному пути', () => {
		assert.isTrue(route.match('/path'));
		assert.isFalse(route.match('/other'));
	});

	it('не должен отображать блок, если он уже обработан', () => {
		route['block'] = block;
		const renderStub = sinon.stub(route, 'render');
		route.render();
		assert.isTrue(renderStub.calledOnce);
	});

	it('должен установить блок на null при уходе', () => {
		route['block'] = block;
		route.leave();
		assert.isNull(route['block']);
	});

	it('должен выдавать ошибку, если корневой элемент не найден', () => {
		querySelectorStub.returns(null);
		assert.throw(() => {
			route.render();
		}, 'root not found by selector "#app"');
	});
});
