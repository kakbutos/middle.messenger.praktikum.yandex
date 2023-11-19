export const tmpl = `
    <header class="main-page">
        <nav>
            <ul>
				{{#each links}}
                	<li>
						{{{this}}}
                	</li>
				{{/each}}
            </ul>
        </nav>
    </header>
`;
