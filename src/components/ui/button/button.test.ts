import { expect } from 'chai';
import sinon from 'sinon';

import { Button } from '.';

describe('Button component', () => {
    it('кнопка кликабельна', () => {
        const callback = sinon.stub();
        const button = new Button({ text: 'text', events: { click: callback } });

        const element = button.element as HTMLElement;

        element.click();

        expect(callback.calledOnce).to.eq(true);
    });
});
