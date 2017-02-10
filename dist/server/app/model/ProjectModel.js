/**
 * Created by Abhishek.Srivastava on 28-11-2016.
 */
"use strict";
var ProjectModel = (function () {
    function ProjectModel(projectModel) {
        this._projectModel = projectModel;
    }
    Object.defineProperty(ProjectModel.prototype, "title", {
        get: function () {
            return this._projectModel.title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectModel.prototype, "status", {
        get: function () {
            return this._projectModel.status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectModel.prototype, "owner", {
        get: function () {
            return this._projectModel.owner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectModel.prototype, "start_date", {
        get: function () {
            return this._projectModel.start_date;
        },
        enumerable: true,
        configurable: true
    });
    return ProjectModel;
}());
Object.seal(ProjectModel);
module.exports = ProjectModel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2RlbC9Qcm9qZWN0TW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBSUg7SUFJSSxzQkFBWSxZQUEyQjtRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztJQUN0QyxDQUFDO0lBQ0Qsc0JBQUksK0JBQUs7YUFBVDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdDQUFNO2FBQVY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDckMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBSzthQUFUO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksb0NBQVU7YUFBZDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUNMLG1CQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDMUIsaUJBQVUsWUFBWSxDQUFDIiwiZmlsZSI6ImFwcC9tb2RlbC9Qcm9qZWN0TW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgQWJoaXNoZWsuU3JpdmFzdGF2YSBvbiAyOC0xMS0yMDE2LlxuICovXG5cbmltcG9ydCBJUHJvamVjdE1vZGVsID0gcmVxdWlyZSgnLi9pbnRlcmZhY2VzL1Byb2plY3RNb2RlbCcpO1xuXG5jbGFzcyBQcm9qZWN0TW9kZWwge1xuXG4gICAgcHJpdmF0ZSBfcHJvamVjdE1vZGVsOiBJUHJvamVjdE1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IocHJvamVjdE1vZGVsOiBJUHJvamVjdE1vZGVsKSB7XG4gICAgICAgIHRoaXMuX3Byb2plY3RNb2RlbCA9IHByb2plY3RNb2RlbDtcbiAgICB9XG4gICAgZ2V0IHRpdGxlICgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvamVjdE1vZGVsLnRpdGxlO1xuICAgIH1cblxuICAgIGdldCBzdGF0dXMgKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0TW9kZWwuc3RhdHVzO1xuICAgIH1cblxuICAgIGdldCBvd25lciAoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3RNb2RlbC5vd25lcjtcbiAgICB9XG4gICAgXG4gICAgZ2V0IHN0YXJ0X2RhdGUgKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0TW9kZWwuc3RhcnRfZGF0ZTtcbiAgICB9XG59XG5PYmplY3Quc2VhbChQcm9qZWN0TW9kZWwpO1xuZXhwb3J0ID0gIFByb2plY3RNb2RlbDsiXX0=
