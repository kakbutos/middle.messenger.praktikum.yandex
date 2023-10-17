import { tmpl } from './main.tmpl';
import Block from '@/common/block/block';

export class Main extends Block {
    constructor() {
        super({});
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}
