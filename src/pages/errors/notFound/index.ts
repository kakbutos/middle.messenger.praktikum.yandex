import { renderTemplate } from '../../../common/decorators/compileDecorator';
import { tmpl } from './notFound.tmpl';
import { errorTemplate } from '../errorTemplate';

export const NotFound = () => {
    return renderTemplate(tmpl, {
        error: errorTemplate({ text: 'Не туда попали', error: '404' }),
    });
};
