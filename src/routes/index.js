import { Router } from 'express';

import NewsController from '../app/controller/NewsController';

class Routes {
    constructor() {
        this.routes = new Router();
        this.routesNotSecurity();
    }

    routesNotSecurity() {
        this.routes.get('/', (req, res) =>
            res.json({
                message:
                    'Wellcome to News API, development by Lucas Vanni for EZDevs Challange',
            })
        );
        this.routes.get('/news', NewsController.index);
    }
}

export default new Routes().routes;
