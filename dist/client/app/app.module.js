"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
/*import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; */
var material_1 = require("@angular/material");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var projects_component_1 = require("./components/projects/projects.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var project_detail_component_1 = require("./components/projectDetail/project-detail.component");
var project_service_1 = require("./services/project.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            //NgbModule.forRoot(),
            material_1.MaterialModule.forRoot(),
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            projects_component_1.ProjectsComponent,
            project_detail_component_1.ProjectDetailComponent
        ],
        providers: [
            project_service_1.ProjectService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQ0FBOEM7QUFDOUMsOERBQTBEO0FBQzFELHdDQUFnRDtBQUNoRCxzQ0FBK0M7QUFDL0MsNERBQTREO0FBQzVELDhDQUFtRDtBQUVuRCxpREFBZ0Q7QUFDaEQsNkNBQThDO0FBRTlDLCtFQUE2RTtBQUM3RSxrRkFBa0Y7QUFDbEYsZ0dBQThGO0FBRTlGLDhEQUE2RDtBQXNCN0QsSUFBYSxTQUFTO0lBQXRCO0lBQXlCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQXpCLEFBQTBCLElBQUE7QUFBYixTQUFTO0lBcEJyQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxzQkFBc0I7WUFDdEIseUJBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsZ0NBQWE7WUFDYixpQkFBVTtZQUNWLG1CQUFXO1lBQ1gscUJBQU87U0FDTjtRQUNILFlBQVksRUFBRTtZQUNaLDRCQUFZO1lBQ1osd0NBQWtCO1lBQ2xCLHNDQUFpQjtZQUNqQixpREFBc0I7U0FDdkI7UUFDRCxTQUFTLEVBQUU7WUFDVCxnQ0FBYztTQUNmO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJmaWxlIjoiYXBwL2FwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSAgICAgZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG4vKmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJzsgKi9cbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IHJvdXRpbmcgfSAgICAgICBmcm9tICcuL2FwcC5yb3V0aW5nJztcblxuaW1wb3J0IHsgUHJvamVjdHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50JztcbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9ICAgZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2plY3REZXRhaWxDb21wb25lbnQgfSAgZnJvbSAnLi9jb21wb25lbnRzL3Byb2plY3REZXRhaWwvcHJvamVjdC1kZXRhaWwuY29tcG9uZW50JztcblxuaW1wb3J0IHsgUHJvamVjdFNlcnZpY2UgfSAgZnJvbSAnLi9zZXJ2aWNlcy9wcm9qZWN0LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLy9OZ2JNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE1hdGVyaWFsTW9kdWxlLmZvclJvb3QoKSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEh0dHBNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgcm91dGluZ1xuICAgIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgUHJvamVjdHNDb21wb25lbnQsXG4gICAgUHJvamVjdERldGFpbENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBQcm9qZWN0U2VydmljZVxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH0iXX0=
