/**
 * Created by Abhishek.Srivastava on 28-11-2016.
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
/*import { NgbModule } from '@ng-bootstrap/ng-bootstrap';*/
var project_1 = require("../../models/project");
var router_1 = require("@angular/router");
var project_service_1 = require("../../services/project.service");
var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(projectService, route) {
        this.projectService = projectService;
        this.route = route;
        this.newProject = false;
        this.navigated = false; // true if navigated here
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            if (id === 'new') {
                _this.newProject = true;
                _this.project = new project_1.Project();
            }
            else {
                _this.newProject = false;
                _this.projectService.getProject(id)
                    .then(function (project) { return _this.project = project; });
            }
        });
    };
    /*ngAfterViewInit() {
        $(this.dateTimePicker.nativeElement).datetimepicker({format: 'LT'});
    }*/
    ProjectDetailComponent.prototype.save = function () {
        var _this = this;
        this.projectService
            .save(this.project)
            .then(function (project) {
            _this.project = project; // saved project, w/ id if new
            _this.goBack();
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    ProjectDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    return ProjectDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", project_1.Project)
], ProjectDetailComponent.prototype, "project", void 0);
ProjectDetailComponent = __decorate([
    core_1.Component({
        selector: 'my-project-detail',
        templateUrl: './app/components/projectDetail/project-detail.component.html'
    }),
    __metadata("design:paramtypes", [project_service_1.ProjectService,
        router_1.ActivatedRoute])
], ProjectDetailComponent);
exports.ProjectDetailComponent = ProjectDetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3REZXRhaWwvcHJvamVjdC1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7OztBQUVILHNDQUF1RDtBQUN2RCwyREFBMkQ7QUFDM0QsZ0RBQTZDO0FBQzdDLDBDQUF5RDtBQUN6RCxrRUFBZ0U7QUFRaEUsSUFBYSxzQkFBc0I7SUFPL0IsZ0NBQ1ksY0FBOEIsRUFDOUIsS0FBcUI7UUFEckIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBUGpDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkIsY0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLHlCQUF5QjtJQU01QyxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBYztZQUNyQyxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7WUFDakMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7cUJBQzdCLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixDQUFDLENBQUM7WUFDakQsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOztPQUVHO0lBRUgscUNBQUksR0FBSjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLGNBQWM7YUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNsQixJQUFJLENBQUMsVUFBQSxPQUFPO1lBQ1QsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyw4QkFBOEI7WUFDdEQsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixDQUFDLENBQUMsQ0FBQyw4QkFBOEI7SUFDM0UsQ0FBQztJQUVELHVDQUFNLEdBQU47UUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDTCw2QkFBQztBQUFELENBM0NBLEFBMkNDLElBQUE7QUExQ1k7SUFBUixZQUFLLEVBQUU7OEJBQVUsaUJBQU87dURBQUM7QUFEakIsc0JBQXNCO0lBTGxDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLFdBQVcsRUFBRSw4REFBOEQ7S0FDOUUsQ0FBQztxQ0FVOEIsZ0NBQWM7UUFDdkIsdUJBQWM7R0FUeEIsc0JBQXNCLENBMkNsQztBQTNDWSx3REFBc0IiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvcHJvamVjdERldGFpbC9wcm9qZWN0LWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgQWJoaXNoZWsuU3JpdmFzdGF2YSBvbiAyOC0xMS0yMDE2LlxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8qaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnOyovXG5pbXBvcnQge1Byb2plY3R9IGZyb20gXCIuLi8uLi9tb2RlbHMvcHJvamVjdFwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBQcm9qZWN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wcm9qZWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7IE1kQnV0dG9uIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LXByb2plY3QtZGV0YWlsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvcHJvamVjdERldGFpbC9wcm9qZWN0LWRldGFpbC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBwcm9qZWN0OiBQcm9qZWN0O1xuICAgIG5ld1Byb2plY3QgPSBmYWxzZTtcbiAgICBlcnJvcjogYW55O1xuICAgIG5hdmlnYXRlZCA9IGZhbHNlOyAvLyB0cnVlIGlmIG5hdmlnYXRlZCBoZXJlXG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHByb2plY3RTZXJ2aWNlOiBQcm9qZWN0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZS5wYXJhbXMuZm9yRWFjaCgocGFyYW1zOiBQYXJhbXMpID0+IHtcbiAgICAgICAgICAgIGxldCBpZCA9IHBhcmFtc1snaWQnXTtcbiAgICAgICAgICAgIGlmIChpZCA9PT0gJ25ldycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5ld1Byb2plY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdCA9IG5ldyBQcm9qZWN0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubmV3UHJvamVjdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdFNlcnZpY2UuZ2V0UHJvamVjdChpZClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocHJvamVjdCA9PiB0aGlzLnByb2plY3QgPSBwcm9qZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgICQodGhpcy5kYXRlVGltZVBpY2tlci5uYXRpdmVFbGVtZW50KS5kYXRldGltZXBpY2tlcih7Zm9ybWF0OiAnTFQnfSk7XG4gICAgfSovXG5cbiAgICBzYXZlKCkge1xuICAgICAgICB0aGlzLnByb2plY3RTZXJ2aWNlXG4gICAgICAgICAgICAuc2F2ZSh0aGlzLnByb2plY3QpXG4gICAgICAgICAgICAudGhlbihwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0OyAvLyBzYXZlZCBwcm9qZWN0LCB3LyBpZCBpZiBuZXdcbiAgICAgICAgICAgICAgICB0aGlzLmdvQmFjaygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLmVycm9yID0gZXJyb3IpOyAvLyBUT0RPOiBEaXNwbGF5IGVycm9yIG1lc3NhZ2VcbiAgICB9XG5cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG59Il19
