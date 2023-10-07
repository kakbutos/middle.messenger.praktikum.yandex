import { renderTemplate } from '../../../common/decorators/compileDecorator';
import { tmpl } from './serverError.tmpl';
import { errorTemplate } from '../errorTemplate';

export const serverError = () => {
    return renderTemplate(tmpl, {
        error: errorTemplate({text: 'Мы уже фиксим', error: '500'})
    });
};
