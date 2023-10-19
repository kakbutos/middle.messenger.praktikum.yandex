import { ROUTES } from './app/router/config/routeConfig';
import './app/style/style.less';

window.addEventListener('DOMContentLoaded', () => {
    const root: HTMLElement | null = document.getElementById('app');

    if (root) {
        const component = new ROUTES[window.location.pathname]() || new ROUTES['/notFound']();

        root.append(component.element!);
        component.dispatchComponentDidMount();
    }
});
