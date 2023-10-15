import { tmpl } from './main.tmpl';
import Block from '../../common/block/Block';

export class Main extends Block {
    constructor() {
        super({});
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
