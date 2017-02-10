"use strict";
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var projects_component_1 = require("./components/projects/projects.component");
var project_detail_component_1 = require("./components/projectDetail/project-detail.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: project_detail_component_1.ProjectDetailComponent
    },
    {
        path: 'projects',
        component: projects_component_1.ProjectsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQXVEO0FBRXZELGtGQUFrRjtBQUVsRiwrRUFBNkU7QUFDN0UsZ0dBQTZGO0FBRTdGLElBQU0sU0FBUyxHQUFXO0lBQ3hCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsWUFBWTtRQUN4QixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFdBQVc7UUFDakIsU0FBUyxFQUFFLHdDQUFrQjtLQUM5QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsU0FBUyxFQUFFLGlEQUFzQjtLQUNsQztJQUNEO1FBQ0UsSUFBSSxFQUFFLFVBQVU7UUFDaEIsU0FBUyxFQUFFLHNDQUFpQjtLQUM3QjtDQUNGLENBQUM7QUFFVyxRQUFBLE9BQU8sR0FBRyxxQkFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAvYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IERhc2hib2FyZENvbXBvbmVudCB9ICAgZnJvbSAnLi9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgUHJvamVjdHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50JztcbmltcG9ydCB7IFByb2plY3REZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvamVjdERldGFpbC9wcm9qZWN0LWRldGFpbC5jb21wb25lbnQnO1xuXG5jb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIHJlZGlyZWN0VG86ICcvZGFzaGJvYXJkJyxcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xuICB9LFxuICB7XG4gICAgcGF0aDogJ2Rhc2hib2FyZCcsXG4gICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdkZXRhaWwvOmlkJyxcbiAgICBjb21wb25lbnQ6IFByb2plY3REZXRhaWxDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdwcm9qZWN0cycsXG4gICAgY29tcG9uZW50OiBQcm9qZWN0c0NvbXBvbmVudFxuICB9XG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGluZyA9IFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcywgeyB1c2VIYXNoOiB0cnVlIH0pO1xuIl19
