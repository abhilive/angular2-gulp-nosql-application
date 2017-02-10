/**
 * Created by Abhishek.Srivastava on 28-11-2016.
 */

import ProjectModel = require("./../model/ProjectModel");
import IProjectModel = require("./../model/interfaces/ProjectModel");
import ProjectSchema = require("./../dataAccess/schemas/ProjectSchema");
import RepositoryBase = require("./BaseRepository");

class ProjectRepository  extends RepositoryBase<IProjectModel> {
    constructor () {
        super(ProjectSchema);
    }
}

Object.seal(ProjectRepository);
export = ProjectRepository;