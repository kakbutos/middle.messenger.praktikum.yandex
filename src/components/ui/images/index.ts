import { tmpl } from './images.tmpl';
import Block from '@/common/block/block';
import { API_URL } from '@/app/global';

export interface ImageProps {
	classNames?: string;
	path?: string;
	src?: string;
	alt: string;
}

export class Images extends Block<ImageProps> {
    render() {
        return this.compile(tmpl, {
            ...this.props,
            src: this.props.src
                ? this.props.src
                : `${API_URL}/resources${this.props.path}`,
        });
    }
}
