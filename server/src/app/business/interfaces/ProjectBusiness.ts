/**
 * Created by Abhishek.Srivastava on 28-11-2016.
 */

import BaseBusiness = require("./../BaseBusiness");
import IProjectModel = require("./../../model/interfaces/ProjectModel");

interface ProjectBusiness extends BaseBusiness<IProjectModel> {

}
export = ProjectBusiness;