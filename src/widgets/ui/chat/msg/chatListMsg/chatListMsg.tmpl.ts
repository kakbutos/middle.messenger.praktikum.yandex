export const tmpl = `
    <div class="chat-msg">
        <ul class="chat-msg__list">
			{{#each chatListMsg}}
				{{{this}}}
			{{/each}}
        </ul>
    </div>
`;
