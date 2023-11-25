export const tmpl = `
    <div class="chat">
        <aside class="chat__sidebar">
            {{{profileLink}}}
            {{{buttonAddChat}}}
            {{{searchInput}}}
			{{{cardList}}}
        </aside>

        <main class="chat__content">
            {{{chatHeader}}}
            {{{chatList}}}
            {{{chatInput}}}
        </main>
    </div>
`;
