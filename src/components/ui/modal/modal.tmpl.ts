export const tmpl = `
    <main class="modal {{classNames}}">
        <div class="modal__inner">
            {{#if title}}<span class="modal__title">{{title}}</span>{{/if}}
            {{{children}}}
            {{#if LinkElement}}{{{LinkElement}}}{{/if}}
        </div>
    </main>
`;
