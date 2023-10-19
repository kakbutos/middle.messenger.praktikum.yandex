import { tmpl } from './notFound.tmpl';
import { ErrorTemplate } from '@/pages/errors/errorTemplate';
import Block from '@/common/block/block';

export class NotFound extends Block {
    constructor() {
        super({});
    }

    init() {
        this.children.error = new ErrorTemplate({ text: 'Не туда попали', error: '404' });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
