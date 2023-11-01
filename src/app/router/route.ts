import Block from '@/common/block/block';

function render(query: string, block: Block | null) {
    const root = document.querySelector(query);

    if (root === null) {
        throw new Error(`root not found by selector "${query}"`);
    }

    root.innerHTML = '';

    root.append(block!.getContent()!);

    return root;
}

export class Route {
    private block: Block | null = null;

    /* eslint-disable-next-line no-useless-constructor */
    constructor(
		private pathname: string,
		private readonly BlockClass: typeof Block,
		private readonly query: string,
    )
    /* eslint-disable-next-line no-empty-function, brace-style */
    {}

    leave() {
        this.block = null;
    }

    match(pathname: string) {
        return pathname === this.pathname;
    }

    render() {
        if (!this.block) {
            this.block = new this.BlockClass({});

            render(this.query, this.block);
        }
    }
}
