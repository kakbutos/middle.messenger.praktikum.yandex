export const tmpl = `
    <main class="modal {{classNames}}">
        <div class="modal__inner">
            <span class="modal__title">{{title}}</span>
            {{{children}}}
            {{{LinkElement}}}
        </div>
    </main>
`;
