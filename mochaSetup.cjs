const { JSDOM } = require('jsdom');

const { window } = new JSDOM('<div id="app"></div>', {
	url: 'http://localhost:3000'
});

global.window = window;
global.document = window.document;
global.DocumentFragment = window.DocumentFragment;
global.history = window.history;

require.extensions['.less'] = function () {
	module.exports = () => ({});
}
