export const tmpl = `
    <div class="chat-header">
        <div class="chat-header__icon">
            <img src="{{icon}}" alt="{{iconName}}">
        </div>

        <div class="chat-header__name chat__title">{{name}}</div>

        <div class="chat-header__action">
            <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="1.5" cy="2" r="1.5" fill="currentColor"/>
                <circle cx="1.5" cy="8" r="1.5" fill="currentColor"/>
                <circle cx="1.5" cy="14" r="1.5" fill="currentColor"/>
            </svg>
        </div>
    </div>
`;
