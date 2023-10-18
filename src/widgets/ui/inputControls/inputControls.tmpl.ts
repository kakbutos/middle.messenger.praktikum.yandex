export const tmpl = `
	<div class="input__wrapper {{classNames}}">
		{{{input}}}

		{{#if hasError}}
			<img class="input__img_error" alt="error" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABhUlEQVR4nM2Sz05TQRTGfxtqgOoOE/QJBEJcsgNN2BGdCemODRsXrXemQAhpgPQZBFf2EdxI4BXUkgBhITwAOFNcCmV9yJm25NKFjSs9yZfcufnOd/58B/6LuCgxHN8wod+S8UgyMnE0xdFO8HwXx3upU1COcjXnXiAYPkbLJ1nhuXhOxfNFMmZljdEEz5w49sRzIhWeRUMjWnZTcssyFS3hZomn3eSNnnA0rCp6b/HUxHF8vcxYMMTUddDqhk3xOK2cHy0YPivy/8SzL1Uq0bAVDTsEy/nlItPiONS2BwpkvNKd/HzLy2D4QbTchgVGxHMjZYoDBdZ5rNzWPKPB0tYO2n8lkPFEPL9/lSgGy7UKnHVHaOq28+Qry4zigUCV1+L4lh9hVxeSfHbs5cn9LiQBx4E4ytGyHQ0faC0yqZaoNclnT+0PNqpbR7GUbGxFw4sOsdNFQ4+kK7Kftl2mmNBp+0CTpcp4OiS1sBcPTrlOQX3WOdNiO/iqbcs7hlLB/lP+p3EHJ9P0jY3i7fgAAAAASUVORK5CYII="/>
			<span class="input__text_error">{{hasError}}</span>
		{{/if}}
	</div>
`;
