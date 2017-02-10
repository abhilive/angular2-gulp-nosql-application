/**
 * Created by Abhishek.Srivastava on 28-11-2016.
 */

import mongoose = require("mongoose");

interface ProjectModel extends mongoose.Document {
    title: string;
    status: string;
    owner: string;
    start_date: string;
}

export = ProjectModel;