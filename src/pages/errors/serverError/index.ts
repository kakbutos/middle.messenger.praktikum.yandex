import { tmpl } from './serverError.tmpl';
import { ErrorTemplate } from '@/pages/errors/errorTemplate';
import Block from '@/common/block/block';

export class ServerError extends Block {
    constructor() {
        super({});
    }

    init() {
        this.children.error = new ErrorTemplate({ text: 'Мы уже фиксим', error: '500' });
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
