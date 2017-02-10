/**
 * Created by Abhishek.Srivastava on 28-11-2016.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ProjectSchema = require("./../dataAccess/schemas/ProjectSchema");
var RepositoryBase = require("./BaseRepository");
var ProjectRepository = (function (_super) {
    __extends(ProjectRepository, _super);
    function ProjectRepository() {
        return _super.call(this, ProjectSchema) || this;
    }
    return ProjectRepository;
}(RepositoryBase));
Object.seal(ProjectRepository);
module.exports = ProjectRepository;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5L1Byb2plY3RSZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7O0FBSUgscUVBQXdFO0FBQ3hFLGlEQUFvRDtBQUVwRDtJQUFpQyxxQ0FBNkI7SUFDMUQ7ZUFDSSxrQkFBTSxhQUFhLENBQUM7SUFDeEIsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FKQSxBQUlDLENBSmdDLGNBQWMsR0FJOUM7QUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDL0IsaUJBQVMsaUJBQWlCLENBQUMiLCJmaWxlIjoiYXBwL3JlcG9zaXRvcnkvUHJvamVjdFJlcG9zaXRvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgQWJoaXNoZWsuU3JpdmFzdGF2YSBvbiAyOC0xMS0yMDE2LlxuICovXG5cbmltcG9ydCBQcm9qZWN0TW9kZWwgPSByZXF1aXJlKFwiLi8uLi9tb2RlbC9Qcm9qZWN0TW9kZWxcIik7XG5pbXBvcnQgSVByb2plY3RNb2RlbCA9IHJlcXVpcmUoXCIuLy4uL21vZGVsL2ludGVyZmFjZXMvUHJvamVjdE1vZGVsXCIpO1xuaW1wb3J0IFByb2plY3RTY2hlbWEgPSByZXF1aXJlKFwiLi8uLi9kYXRhQWNjZXNzL3NjaGVtYXMvUHJvamVjdFNjaGVtYVwiKTtcbmltcG9ydCBSZXBvc2l0b3J5QmFzZSA9IHJlcXVpcmUoXCIuL0Jhc2VSZXBvc2l0b3J5XCIpO1xuXG5jbGFzcyBQcm9qZWN0UmVwb3NpdG9yeSAgZXh0ZW5kcyBSZXBvc2l0b3J5QmFzZTxJUHJvamVjdE1vZGVsPiB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcihQcm9qZWN0U2NoZW1hKTtcbiAgICB9XG59XG5cbk9iamVjdC5zZWFsKFByb2plY3RSZXBvc2l0b3J5KTtcbmV4cG9ydCA9IFByb2plY3RSZXBvc2l0b3J5OyJdfQ==
