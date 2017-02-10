"use strict";
/**
 * Modified by Abhishek.Srivastava on 15-06-2016.
 */
var express = require("express");
/*import HeroRoutes = require('../routes/HeroRoutes');*/
var ProjectRoutes = require("../routes/ProjectRoutes");
var app = express();
var Routes = (function () {
    function Routes() {
    }
    Object.defineProperty(Routes.prototype, "routes", {
        get: function () {
            app.use("/", new ProjectRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return Routes;
}());
module.exports = Routes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9yb3V0ZXMvUm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7R0FFRztBQUNILGlDQUFvQztBQUdwQyx3REFBd0Q7QUFDeEQsdURBQTBEO0FBRTFELElBQUksR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXBCO0lBQUE7SUFRQSxDQUFDO0lBTkcsc0JBQUksMEJBQU07YUFBVjtZQUVDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksYUFBYSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFdEMsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUM7OztPQUFBO0lBQ0wsYUFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBQ0QsaUJBQVMsTUFBTSxDQUFDIiwiZmlsZSI6ImNvbmZpZy9yb3V0ZXMvUm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNb2RpZmllZCBieSBBYmhpc2hlay5Tcml2YXN0YXZhIG9uIDE1LTA2LTIwMTYuXG4gKi9cbmltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuaW1wb3J0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbi8qaW1wb3J0IEhlcm9Sb3V0ZXMgPSByZXF1aXJlKCcuLi9yb3V0ZXMvSGVyb1JvdXRlcycpOyovXG5pbXBvcnQgUHJvamVjdFJvdXRlcyA9IHJlcXVpcmUoJy4uL3JvdXRlcy9Qcm9qZWN0Um91dGVzJyk7XG5cbnZhciBhcHAgPSBleHByZXNzKCk7XG5cbmNsYXNzIFJvdXRlcyB7XG5cbiAgICBnZXQgcm91dGVzKCkge1xuXG4gICAgXHRhcHAudXNlKFwiL1wiLCBuZXcgUHJvamVjdFJvdXRlcygpLnJvdXRlcyk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYXBwO1xuICAgIH1cbn1cbmV4cG9ydCA9IFJvdXRlczsiXX0=
