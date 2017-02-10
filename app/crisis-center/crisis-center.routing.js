"use strict";
var router_1 = require('@angular/router');
var crisis_list_component_1 = require('./crisis-list.component');
var crisis_detail_component_1 = require('./crisis-detail.component');
var crisisesRoutes = [
    { path: 'crisis-center', component: crisis_list_component_1.CrisisListComponent },
    { path: 'crisis/:id', component: crisis_detail_component_1.CrisisDetailComponent }
];
exports.crisiscenterRouting = router_1.RouterModule.forChild(crisisesRoutes);
//# sourceMappingURL=crisis-center.routing.js.map