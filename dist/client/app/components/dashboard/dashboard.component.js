/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var project_service_1 = require("../../services/project.service");
var DashboardComponent = (function () {
    function DashboardComponent(router, projectService) {
        this.router = router;
        this.projectService = projectService;
        this.projects = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getProjects()
            .then(function (projects) { return _this.projects = projects; });
    };
    DashboardComponent.prototype.gotoDetail = function (project) {
        var link = ['/detail', project._id];
        this.router.navigate(link);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: './app/components/dashboard/dashboard.component.html',
        styleUrls: ['./app/components/dashboard/dashboard.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        project_service_1.ProjectService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7OztBQUVILHNDQUFnRDtBQUNoRCwwQ0FBeUM7QUFHekMsa0VBQThEO0FBUTlELElBQWEsa0JBQWtCO0lBRzNCLDRCQUNZLE1BQWMsRUFDZCxjQUE4QjtRQUQ5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSjFDLGFBQVEsR0FBYyxFQUFFLENBQUM7SUFLekIsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFBQSxpQkFHQztRQUZHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFO2FBQzVCLElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELHVDQUFVLEdBQVYsVUFBVyxPQUFnQjtRQUN2QixJQUFJLElBQUksR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSxrQkFBa0I7SUFOOUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSxxREFBcUQ7UUFDbEUsU0FBUyxFQUFFLENBQUMsb0RBQW9ELENBQUM7S0FDcEUsQ0FBQztxQ0FNc0IsZUFBTTtRQUNFLGdDQUFjO0dBTGpDLGtCQUFrQixDQWlCOUI7QUFqQlksZ0RBQWtCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IE1vaXouS2FjaHdhbGEgb24gMDItMDYtMjAxNi5cbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7UHJvamVjdH0gZnJvbSBcIi4uLy4uL21vZGVscy9wcm9qZWN0XCI7XG5pbXBvcnQge1Byb2plY3RTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcHJvamVjdC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktZGFzaGJvYXJkJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb2plY3RzOiBQcm9qZWN0W10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIHByb2plY3RTZXJ2aWNlOiBQcm9qZWN0U2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnByb2plY3RTZXJ2aWNlLmdldFByb2plY3RzKClcbiAgICAgICAgICAgIC50aGVuKHByb2plY3RzID0+IHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgZ290b0RldGFpbChwcm9qZWN0OiBQcm9qZWN0KSB7XG4gICAgICAgIGxldCBsaW5rID0gWycvZGV0YWlsJywgcHJvamVjdC5faWRdO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShsaW5rKTtcbiAgICB9XG59Il19
