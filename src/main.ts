import './app/style/style.less';
import router from '@/app/router/router';
import { ROUTES, RoutesBlocks } from '@/app/router/config/routeConfig';

window.addEventListener('DOMContentLoaded', () => {
    Object.entries(ROUTES).forEach(([componentName, path]) => {
        router.use(path, RoutesBlocks[componentName]);
    });

    router.start();
});
