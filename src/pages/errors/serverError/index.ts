import { tmpl } from './serverError.tmpl';
import { ErrorTemplate } from '../errorTemplate';
import Block from '../../../common/block/Block';

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
