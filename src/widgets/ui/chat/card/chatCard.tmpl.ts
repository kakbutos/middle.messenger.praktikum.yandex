export const tmpl = `
    <li class="chat-card {{#if isActive }}active{{/if}}">
        <div class="chat-card__icon">
        	<img src="" alt="avatar">
        </div>
        <div class="chat-card__msg-content">
            <div class="msg-content__name chat__title">{{title}}</div>
            <div class="msg-content__text">{{last_message.content}}</div>
        </div>
        <div class="chat-card__msg-info">
            <div class="msg-info__time">{{last_message.time}}</div>
            <div class="msg-info__count">{{unread_count}}</div>
        </div>
    </li>
`;
