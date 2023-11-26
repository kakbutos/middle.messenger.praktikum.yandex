import { expect, assert } from 'chai';

import Block from '../../common/block/block';
import Router from './router';

describe('Router', () => {
    let mainPage: typeof Block;
    let messagePage: typeof Block;

    beforeEach(() => {
        class MainPage {
            getContent() {
                const div = document.createElement('div');

                div.setAttribute('id', 'main-page');

                return div;
            }
        }

        class MessagePage {
            getContent() {
                const div = document.createElement('div');

                div.setAttribute('id', 'message');

                return div;
            }
        }

        mainPage = MainPage as unknown as typeof Block;
        messagePage = MessagePage as unknown as typeof Block;
    });

    it('страница отображается по роуту', () => {
        Router.use('/', mainPage).start();

        expect(document.getElementById('main-page')).not.to.be.null;
    });

    it('переход по роуту произошел успешно', () => {
        Router
            .use('/', mainPage)
            .use('/message', messagePage)
            .start();

        Router.go('/message');

        assert.strictEqual(window.location.pathname, '/message');
    });
});
