/**
 * Created by Abhishek.Srivastava on 28-11-2016.
 */
import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {Project} from "../../models/project";
import { Router } from '@angular/router';

@Component({
    selector: 'running-projects',
    templateUrl: './app/components/projects/projects.component.html'
})

export class ProjectsComponent implements OnInit {

    projects: Project[];
    selectedProject: Project;
    error: any;

    constructor(
        private router: Router,
        private projectService: ProjectService) { }
    getProjects() {
        this.projectService.getProjects().then(projects => this.projects = projects);
    }
    ngOnInit() {
        this.getProjects();
    }
    onSelect(project: Project) { this.selectedProject = project; }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedProject._id]);
    }

    addProject() {
        this.selectedProject = null;
        this.router.navigate(['/detail', 'new']);
    }

    deleteProject(project: Project, event: any) {
        event.stopPropagation();
        this.projectService
            .delete(project)
            .then(res => {
                this.projects = this.projects.filter(p => p !== project);
                if (this.selectedProject === project) { this.selectedProject = null; }
            })
            .catch(error => this.error = error);
    }
}
