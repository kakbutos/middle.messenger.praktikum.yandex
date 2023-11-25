import { tmpl } from './images.tmpl';
import Block from '@/common/block/block';
import { API_URL } from '@/app/global';

export interface ImageProps {
	classNames?: string;
	path?: string;
	src?: string;
	alt?: string;
	events?: {
		error?: (...args: any) => void;
	};
}

export class Images extends Block<ImageProps> {
    init() {
        const loadError = () => {
            const imgEl = this.element as HTMLImageElement;

            imgEl.src = '/icons/ghostImg.png';
        };

        this.setProps({
            events: {
                error: loadError,
            },
        });
    }

    render() {
        return this.compile(tmpl, {
            ...this.props,
            src: this.props.src
                ? this.props.src
                : (this.props.path ? `${API_URL}/resources${this.props.path}` : ''),
        });
    }
}
