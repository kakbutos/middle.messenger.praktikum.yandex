import { expect } from 'chai';
import Block from './block';

interface Props {
    text?: string;
    events?: { click?: () => void; };
    children?: BlockDiv;
}

class BlockDiv extends Block<Props> {
    getContent() {
        const div = document.createElement('div');

        div.setAttribute('id', 'block');

        if (this.props.text) {
            div.append(this.props.text);
        }

        return div;
    }
}

describe('Block', () => {
    it('создание компонента', () => {
        const block = new BlockDiv({ text: 'hello' });

        expect(block.getContent().outerHTML).equal('<div id="block">hello</div>');
    });

    it('прокидывание children в блок', () => {
        const children = new BlockDiv({ text: 'children' });
        const block = new BlockDiv({ children });
        const childrenBlock = block.children.children as Block;
        const childrenContent = childrenBlock.getContent() as HTMLElement;

        expect(childrenContent.innerHTML).to.equal('children');
    });

    it('проверка обновления пропсов', () => {
        const block = new BlockDiv({ text: 'hello' });
        block.setProps({ text: 'hello world' });

        expect(block.getContent().outerHTML).equal('<div id="block">hello world</div>');
    });

    it('проверка добавления события', () => {
        const block = new BlockDiv({
            text: 'text',
            events: {
                click: () => {},
            },
        });

        // @ts-ignore
        expect(!!block.props.events?.click).to.be.true;
    });
});
