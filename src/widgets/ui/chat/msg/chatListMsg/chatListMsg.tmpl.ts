export const tmpl = `
    <div class="chat-msg">
        <ul class="chat-msg__list">
        	{{#if isEmpty}}
        		<span class="chat-msg__ghost">Выберите чат, чтобы отправить сообщение</span>
        	{{/if}}

			{{#each chatListMsg}}
				{{{this}}}
			{{/each}}
        </ul>
    </div>
`;
