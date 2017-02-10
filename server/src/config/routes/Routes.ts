/**
 * Modified by Abhishek.Srivastava on 15-06-2016.
 */
import express = require('express');
import path = require('path');

/*import HeroRoutes = require('../routes/HeroRoutes');*/
import ProjectRoutes = require('../routes/ProjectRoutes');

var app = express();

class Routes {

    get routes() {

    	app.use("/", new ProjectRoutes().routes);
        
        return app;
    }
}
export = Routes;