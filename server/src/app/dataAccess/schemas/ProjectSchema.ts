/**
 * Created by Abhishek.Srivastava on 28-11-2016.
 */

import DataAccess = require('../DataAccess');
import IProjectModel = require("./../../model/interfaces/ProjectModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ProjectSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            title : {
                type: String,
                required: true
            },
            owner : {
                type: String,
                required: true
            },
            status: {
                type: String,
                required: true
            },
            start_date: {
                type: String,
                required: true
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IProjectModel>("Projects", ProjectSchema.schema);
export = schema;""