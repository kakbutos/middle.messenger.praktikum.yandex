export const tmpl = `
    <div class="modal {{classNames}}">
        <div class="modal__inner">
            <span class="modal__title">{{title}}</span>
            {{{children}}}
            <div class="button button_blue">
                <span class="button__text">{{textButton}}</span>
            </div>
            {{{LinkElement}}}
        </div>
    </div>
`;
