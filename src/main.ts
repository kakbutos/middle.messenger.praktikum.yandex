import './app/style/style.less';
import router from '@/app/router/router';
import { ROUTES, RoutesBlocks } from '@/app/router/config/routeConfig';
import AuthController from '@/controllers/auth/authController';

window.addEventListener('DOMContentLoaded', async () => {
    Object.entries(ROUTES).forEach(([componentName, path]) => {
        router.use(path, RoutesBlocks[componentName]);
    });

    try {
        await AuthController.fetchUser();

        router.start();
    } catch (e) {
        router.start();
    }
});
