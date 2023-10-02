import { tmpl } from './main.tmpl';
import { renderTemplate } from '../../common/decorators/compileDecorator';

export const Main = () => {
    return renderTemplate(tmpl);
};
