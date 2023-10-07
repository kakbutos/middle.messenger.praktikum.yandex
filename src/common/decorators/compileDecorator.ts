import Handlebars from 'handlebars';

export const renderTemplate = (input: string, options = {}): string => {
    return Handlebars.compile(input)(options);
}
