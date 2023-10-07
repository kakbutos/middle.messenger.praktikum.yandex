import { ROUTES } from './app/router/config/routeConfig';
import './app/style/style.less';

window.addEventListener('DOMContentLoaded', () => {
    const root: HTMLElement | null = document.getElementById('app');

    if (root) {
        root.innerHTML = ROUTES[window.location.pathname] || ROUTES['/notFound'];
    }
});
