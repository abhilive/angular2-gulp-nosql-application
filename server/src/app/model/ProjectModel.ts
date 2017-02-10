/**
 * Created by Abhishek.Srivastava on 28-11-2016.
 */

import IProjectModel = require('./interfaces/ProjectModel');

class ProjectModel {

    private _projectModel: IProjectModel;

    constructor(projectModel: IProjectModel) {
        this._projectModel = projectModel;
    }
    get title (): string {
        return this._projectModel.title;
    }

    get status (): string {
        return this._projectModel.status;
    }

    get owner (): string {
        return this._projectModel.owner;
    }
    
    get start_date (): string {
        return this._projectModel.start_date;
    }
}
Object.seal(ProjectModel);
export =  ProjectModel;