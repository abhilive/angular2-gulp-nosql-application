/**
 * Modified by Abhishek.Srivastava on 05-12-2016.
 */
"use strict";
var Constants = (function () {
    function Constants() {
    }
    return Constants;
}());
Constants.DB_CONNECTION_STRING = process.env.NODE_ENV === 'production' ? process.env.dbURI : "mongodb://localhost:27017/projectmanagement";
Object.seal(Constants);
module.exports = Constants;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy9jb25zdGFudHMvY29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOztBQUVIO0lBQUE7SUFFQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUZBLEFBRUM7QUFEVSw4QkFBb0IsR0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsNkNBQTZDLENBQUE7QUFFbkosTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN2QixpQkFBUyxTQUFTLENBQUMiLCJmaWxlIjoiY29uZmlnL2NvbnN0YW50cy9jb25zdGFudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1vZGlmaWVkIGJ5IEFiaGlzaGVrLlNyaXZhc3RhdmEgb24gMDUtMTItMjAxNi5cbiAqL1xuXG5jbGFzcyBDb25zdGFudHMge1xuICAgIHN0YXRpYyBEQl9DT05ORUNUSU9OX1NUUklORzogc3RyaW5nID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IHByb2Nlc3MuZW52LmRiVVJJIDogXCJtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L3Byb2plY3RtYW5hZ2VtZW50XCJcbn1cbk9iamVjdC5zZWFsKENvbnN0YW50cyk7XG5leHBvcnQgPSBDb25zdGFudHM7Il19