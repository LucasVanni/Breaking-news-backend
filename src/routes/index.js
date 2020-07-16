import { Router } from 'express';

import NewsController from '../app/controller/NewsController';

class Routes {
    constructor() {
        this.routes = new Router();
        this.routesNotSecurity();
    }

    routesNotSecurity() {
        this.routes.get('/news', NewsController.index);
    }
}

export default new Routes().routes;
