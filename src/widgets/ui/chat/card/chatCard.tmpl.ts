export const tmpl = `
    <li class="chat-card {{#if isActive }}active{{/if}}">
        <div class="chat-card__icon">
        	{{{imageCard}}}
        </div>
        <div class="chat-card__msg-content">
            <div class="msg-content__name chat__title">{{title}}</div>
            {{#if last_message}}<div class="msg-content__text">{{last_message.content}}</div>{{/if}}
        </div>
        <div class="chat-card__msg-info">
            {{#if last_message}}<div class="msg-info__time">{{last_message.time}}</div>{{/if}}
            <div class="msg-info__count">{{unread_count}}</div>
        </div>
    </li>
`;
