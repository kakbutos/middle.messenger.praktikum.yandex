export const tmpl = `
    <div class="chat">
        <aside class="chat__sidebar">
            {{{profileLink}}}
            {{{searchInput}}}
            <ul class="chat-card__list">
                {{{card}}}
                {{{card}}}
                {{{card}}}
                {{{card}}}
                {{{card}}}
                {{{card}}}
                {{{card}}}
                {{{card}}}
                {{{card}}}
                {{{card}}}
                {{{card}}}
                {{{card}}}
                {{{card}}}
                {{{card}}}
            </ul>
        </aside>

        <main class="chat__content">
            {{{chatHeader}}}
            {{{chatList}}}
            {{{chatInput}}}
        </main>
    </div>
`;
