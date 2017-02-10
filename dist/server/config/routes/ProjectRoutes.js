/**
 * Created by Abhishek.Srivastava on 28-11-2016.
 */
"use strict";
var express = require("express");
var ProjectController = require("./../../controllers/ProjectController");
var router = express.Router();
var ProjectRoutes = (function () {
    function ProjectRoutes() {
        this._projectController = new ProjectController();
    }
    Object.defineProperty(ProjectRoutes.prototype, "routes", {
        get: function () {
            var controller = this._projectController;
            router.get("/projects", controller.retrieve);
            router.post("/projects", controller.create);
            router.put("/projects/:_id", controller.update);
            router.get("/projects/:_id", controller.findById);
            router.delete("/projects/:_id", controller.delete);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return ProjectRoutes;
}());
Object.seal(ProjectRoutes);
module.exports = ProjectRoutes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvUHJvamVjdFJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSCxpQ0FBb0M7QUFDcEMseUVBQTRFO0FBRTVFLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM5QjtJQUdJO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBQ0Qsc0JBQUksaUNBQU07YUFBVjtZQUNJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUV6QyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRW5ELE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFHTCxvQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNCLGlCQUFTLGFBQWEsQ0FBQyIsImZpbGUiOiJjb25maWcvcm91dGVzL1Byb2plY3RSb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgQWJoaXNoZWsuU3JpdmFzdGF2YSBvbiAyOC0xMS0yMDE2LlxuICovXG5cbmltcG9ydCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5pbXBvcnQgUHJvamVjdENvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi8uLi8uLi9jb250cm9sbGVycy9Qcm9qZWN0Q29udHJvbGxlclwiKTtcblxudmFyIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5jbGFzcyBQcm9qZWN0Um91dGVzIHtcbiAgICBwcml2YXRlIF9wcm9qZWN0Q29udHJvbGxlcjogUHJvamVjdENvbnRyb2xsZXI7XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuX3Byb2plY3RDb250cm9sbGVyID0gbmV3IFByb2plY3RDb250cm9sbGVyKCk7XG4gICAgfVxuICAgIGdldCByb3V0ZXMgKCkge1xuICAgICAgICB2YXIgY29udHJvbGxlciA9IHRoaXMuX3Byb2plY3RDb250cm9sbGVyO1xuXG4gICAgICAgIHJvdXRlci5nZXQoXCIvcHJvamVjdHNcIiwgY29udHJvbGxlci5yZXRyaWV2ZSk7XG4gICAgICAgIHJvdXRlci5wb3N0KFwiL3Byb2plY3RzXCIsIGNvbnRyb2xsZXIuY3JlYXRlKTtcbiAgICAgICAgcm91dGVyLnB1dChcIi9wcm9qZWN0cy86X2lkXCIsIGNvbnRyb2xsZXIudXBkYXRlKTtcbiAgICAgICAgcm91dGVyLmdldChcIi9wcm9qZWN0cy86X2lkXCIsIGNvbnRyb2xsZXIuZmluZEJ5SWQpO1xuICAgICAgICByb3V0ZXIuZGVsZXRlKFwiL3Byb2plY3RzLzpfaWRcIiwgY29udHJvbGxlci5kZWxldGUpO1xuXG4gICAgICAgIHJldHVybiByb3V0ZXI7XG4gICAgfVxuXG5cbn1cblxuT2JqZWN0LnNlYWwoUHJvamVjdFJvdXRlcyk7XG5leHBvcnQgPSBQcm9qZWN0Um91dGVzOyJdfQ==
