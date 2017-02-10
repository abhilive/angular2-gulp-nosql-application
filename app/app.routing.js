"use strict";
var router_1 = require('@angular/router');
//import { HeroListComponent }    from './heroes/hero-list.component';
var appRoutes = [
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: 'crisis-center', loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule' },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map