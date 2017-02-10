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
/**
 * Created by Abhishek.Srivastava on 28-11-2016.
 */
var core_1 = require("@angular/core");
var project_service_1 = require("../../services/project.service");
var router_1 = require("@angular/router");
var ProjectsComponent = (function () {
    function ProjectsComponent(router, projectService) {
        this.router = router;
        this.projectService = projectService;
    }
    ProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects().then(function (projects) { return _this.projects = projects; });
    };
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectsComponent.prototype.onSelect = function (project) { this.selectedProject = project; };
    ProjectsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedProject._id]);
    };
    ProjectsComponent.prototype.addProject = function () {
        this.selectedProject = null;
        this.router.navigate(['/detail', 'new']);
    };
    ProjectsComponent.prototype.deleteProject = function (project, event) {
        var _this = this;
        event.stopPropagation();
        this.projectService
            .delete(project)
            .then(function (res) {
            _this.projects = _this.projects.filter(function (p) { return p !== project; });
            if (_this.selectedProject === project) {
                _this.selectedProject = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    core_1.Component({
        selector: 'running-projects',
        templateUrl: './app/components/projects/projects.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        project_service_1.ProjectService])
], ProjectsComponent);
exports.ProjectsComponent = ProjectsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxzQ0FBZ0Q7QUFDaEQsa0VBQThEO0FBRTlELDBDQUF5QztBQU96QyxJQUFhLGlCQUFpQjtJQU0xQiwyQkFDWSxNQUFjLEVBQ2QsY0FBOEI7UUFEOUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFJLENBQUM7SUFDL0MsdUNBQVcsR0FBWDtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFDRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxvQ0FBUSxHQUFSLFVBQVMsT0FBZ0IsSUFBSSxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFOUQsc0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsc0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHlDQUFhLEdBQWIsVUFBYyxPQUFnQixFQUFFLEtBQVU7UUFBMUMsaUJBU0M7UUFSRyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGNBQWM7YUFDZCxNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ2YsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNMLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssT0FBTyxFQUFiLENBQWEsQ0FBQyxDQUFDO1lBQ3pELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxlQUFlLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFBQyxLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUFDLENBQUM7UUFDMUUsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBO0FBcENZLGlCQUFpQjtJQUw3QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixXQUFXLEVBQUUsbURBQW1EO0tBQ25FLENBQUM7cUNBU3NCLGVBQU07UUFDRSxnQ0FBYztHQVJqQyxpQkFBaUIsQ0FvQzdCO0FBcENZLDhDQUFpQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgQWJoaXNoZWsuU3JpdmFzdGF2YSBvbiAyOC0xMS0yMDE2LlxuICovXG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UHJvamVjdFNlcnZpY2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9wcm9qZWN0LnNlcnZpY2VcIjtcbmltcG9ydCB7UHJvamVjdH0gZnJvbSBcIi4uLy4uL21vZGVscy9wcm9qZWN0XCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3J1bm5pbmctcHJvamVjdHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcm9qZWN0czogUHJvamVjdFtdO1xuICAgIHNlbGVjdGVkUHJvamVjdDogUHJvamVjdDtcbiAgICBlcnJvcjogYW55O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgcHJvamVjdFNlcnZpY2U6IFByb2plY3RTZXJ2aWNlKSB7IH1cbiAgICBnZXRQcm9qZWN0cygpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0U2VydmljZS5nZXRQcm9qZWN0cygpLnRoZW4ocHJvamVjdHMgPT4gdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzKTtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0UHJvamVjdHMoKTtcbiAgICB9XG4gICAgb25TZWxlY3QocHJvamVjdDogUHJvamVjdCkgeyB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IHByb2plY3Q7IH1cblxuICAgIGdvdG9EZXRhaWwoKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2RldGFpbCcsIHRoaXMuc2VsZWN0ZWRQcm9qZWN0Ll9pZF0pO1xuICAgIH1cblxuICAgIGFkZFByb2plY3QoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGV0YWlsJywgJ25ldyddKTtcbiAgICB9XG5cbiAgICBkZWxldGVQcm9qZWN0KHByb2plY3Q6IFByb2plY3QsIGV2ZW50OiBhbnkpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMucHJvamVjdFNlcnZpY2VcbiAgICAgICAgICAgIC5kZWxldGUocHJvamVjdClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKHAgPT4gcCAhPT0gcHJvamVjdCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRQcm9qZWN0ID09PSBwcm9qZWN0KSB7IHRoaXMuc2VsZWN0ZWRQcm9qZWN0ID0gbnVsbDsgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLmVycm9yID0gZXJyb3IpO1xuICAgIH1cbn1cbiJdfQ==
