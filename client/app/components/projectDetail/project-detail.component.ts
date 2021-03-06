/**
 * Created by Abhishek.Srivastava on 28-11-2016.
 */

import {Component, Input, OnInit} from '@angular/core';
/*import { NgbModule } from '@ng-bootstrap/ng-bootstrap';*/
import {Project} from "../../models/project";
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from "../../services/project.service";
import { MdButton } from '@angular/material';

@Component({
    selector: 'my-project-detail',
    templateUrl: './app/components/projectDetail/project-detail.component.html'
})

export class ProjectDetailComponent implements OnInit {
    @Input() project: Project;
    newProject = false;
    error: any;
    navigated = false; // true if navigated here


    constructor(
        private projectService: ProjectService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if (id === 'new') {
                this.newProject = true;
                this.project = new Project();
            } else {
                this.newProject = false;
                this.projectService.getProject(id)
                    .then(project => this.project = project);
            }
        });
    }

    /*ngAfterViewInit() {
        $(this.dateTimePicker.nativeElement).datetimepicker({format: 'LT'});
    }*/

    save() {
        this.projectService
            .save(this.project)
            .then(project => {
                this.project = project; // saved project, w/ id if new
                this.goBack();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack() {
        window.history.back();
    }
}