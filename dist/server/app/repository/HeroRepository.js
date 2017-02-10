/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HeroSchema = require("./../dataAccess/schemas/HeroSchema");
var RepositoryBase = require("./BaseRepository");
var HeroRepository = (function (_super) {
    __extends(HeroRepository, _super);
    function HeroRepository() {
        return _super.call(this, HeroSchema) || this;
    }
    return HeroRepository;
}(RepositoryBase));
Object.seal(HeroRepository);
module.exports = HeroRepository;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZXBvc2l0b3J5L0hlcm9SZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7O0FBSUgsK0RBQWtFO0FBQ2xFLGlEQUFvRDtBQUVwRDtJQUE4QixrQ0FBMEI7SUFDcEQ7ZUFDSSxrQkFBTSxVQUFVLENBQUM7SUFDckIsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FKQSxBQUlDLENBSjZCLGNBQWMsR0FJM0M7QUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzVCLGlCQUFTLGNBQWMsQ0FBQyIsImZpbGUiOiJhcHAvcmVwb3NpdG9yeS9IZXJvUmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBNb2l6LkthY2h3YWxhIG9uIDE1LTA2LTIwMTYuXG4gKi9cblxuaW1wb3J0IEhlcm9Nb2RlbCA9IHJlcXVpcmUoXCIuLy4uL21vZGVsL0hlcm9Nb2RlbFwiKTtcbmltcG9ydCBJSGVyb01vZGVsID0gcmVxdWlyZShcIi4vLi4vbW9kZWwvaW50ZXJmYWNlcy9IZXJvTW9kZWxcIik7XG5pbXBvcnQgSGVyb1NjaGVtYSA9IHJlcXVpcmUoXCIuLy4uL2RhdGFBY2Nlc3Mvc2NoZW1hcy9IZXJvU2NoZW1hXCIpO1xuaW1wb3J0IFJlcG9zaXRvcnlCYXNlID0gcmVxdWlyZShcIi4vQmFzZVJlcG9zaXRvcnlcIik7XG5cbmNsYXNzIEhlcm9SZXBvc2l0b3J5ICBleHRlbmRzIFJlcG9zaXRvcnlCYXNlPElIZXJvTW9kZWw+IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKEhlcm9TY2hlbWEpO1xuICAgIH1cbn1cblxuT2JqZWN0LnNlYWwoSGVyb1JlcG9zaXRvcnkpO1xuZXhwb3J0ID0gSGVyb1JlcG9zaXRvcnk7Il19
