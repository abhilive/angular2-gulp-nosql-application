/**
 * Created by Abhishek.Srivastava on 28-11-2016.
 */
"use strict";
var DataAccess = require("../DataAccess");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var ProjectSchema = (function () {
    function ProjectSchema() {
    }
    Object.defineProperty(ProjectSchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                title: {
                    type: String,
                    required: true
                },
                owner: {
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
        },
        enumerable: true,
        configurable: true
    });
    return ProjectSchema;
}());
var schema = mongooseConnection.model("Projects", ProjectSchema.schema);
"";
module.exports = schema;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhQWNjZXNzL3NjaGVtYXMvUHJvamVjdFNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSCwwQ0FBNkM7QUFHN0MsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDO0FBQzNDLElBQUksa0JBQWtCLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDO0FBRXZEO0lBQUE7SUF3QkEsQ0FBQztJQXRCRyxzQkFBVyx1QkFBTTthQUFqQjtZQUNJLElBQUksTUFBTSxHQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLEtBQUssRUFBRztvQkFDSixJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsSUFBSTtpQkFDakI7Z0JBQ0QsS0FBSyxFQUFHO29CQUNKLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxJQUFJO2lCQUNqQjtnQkFDRCxNQUFNLEVBQUU7b0JBQ0osSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7aUJBQ2pCO2dCQUNELFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsSUFBSTtpQkFDakI7YUFDSixDQUFDLENBQUM7WUFFSCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ2xCLENBQUM7OztPQUFBO0lBQ0wsb0JBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBQ0QsSUFBSSxNQUFNLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFnQixVQUFVLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZFLEVBQUUsQ0FBQTtBQUFsQixpQkFBUyxNQUFNLENBQUMiLCJmaWxlIjoiYXBwL2RhdGFBY2Nlc3Mvc2NoZW1hcy9Qcm9qZWN0U2NoZW1hLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IEFiaGlzaGVrLlNyaXZhc3RhdmEgb24gMjgtMTEtMjAxNi5cbiAqL1xuXG5pbXBvcnQgRGF0YUFjY2VzcyA9IHJlcXVpcmUoJy4uL0RhdGFBY2Nlc3MnKTtcbmltcG9ydCBJUHJvamVjdE1vZGVsID0gcmVxdWlyZShcIi4vLi4vLi4vbW9kZWwvaW50ZXJmYWNlcy9Qcm9qZWN0TW9kZWxcIik7XG5cbnZhciBtb25nb29zZSA9IERhdGFBY2Nlc3MubW9uZ29vc2VJbnN0YW5jZTtcbnZhciBtb25nb29zZUNvbm5lY3Rpb24gPSBEYXRhQWNjZXNzLm1vbmdvb3NlQ29ubmVjdGlvbjtcblxuY2xhc3MgUHJvamVjdFNjaGVtYSB7XG5cbiAgICBzdGF0aWMgZ2V0IHNjaGVtYSAoKSB7XG4gICAgICAgIHZhciBzY2hlbWEgPSAgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICAgICAgICAgIHRpdGxlIDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG93bmVyIDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXR1czoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0YXJ0X2RhdGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNjaGVtYTtcbiAgICB9XG59XG52YXIgc2NoZW1hID0gbW9uZ29vc2VDb25uZWN0aW9uLm1vZGVsPElQcm9qZWN0TW9kZWw+KFwiUHJvamVjdHNcIiwgUHJvamVjdFNjaGVtYS5zY2hlbWEpO1xuZXhwb3J0ID0gc2NoZW1hO1wiXCIiXX0=
