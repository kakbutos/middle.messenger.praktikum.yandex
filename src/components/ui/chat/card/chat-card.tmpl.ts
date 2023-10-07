export const tmpl = `
    <li class="chat-card">
        <div class="chat-card__icon"><img src="" alt="avatar"></div>
        <div class="chat-card__msg-content">
            <div class="msg-content__name chat__title">{{name}}</div>
            <div class="msg-content__text">{{text}}</div>
        </div>
        <div class="chat-card__msg-info">
            <div class="msg-info__time">{{time}}</div>
            <div class="msg-info__count">{{countMsg}}</div>
        </div>
    </li>
`;
