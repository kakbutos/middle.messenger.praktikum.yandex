export const tmpl = `
    <div class="modal {{classNames}}">
    	{{#if closeIcon}}<span class="modal__close">X</span>{{/if}}
        <div class="modal__inner">
            {{#if title}}<span class="modal__title">{{title}}</span>{{/if}}
            {{{children}}}
            {{#if LinkElement}}{{{LinkElement}}}{{/if}}
        </div>
    </div>
`;
