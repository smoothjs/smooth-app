import { ExpressProvider } from '@smoothjs/express-adapter';
import { HomeController } from '../home';

export default {
    basePath: '/',

    middlewares: [],

    controllers: [
        new HomeController()
    ],

    providers: [
        ExpressProvider
    ],
}