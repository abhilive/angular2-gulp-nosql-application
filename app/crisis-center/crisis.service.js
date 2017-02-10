"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Crisis = (function () {
    function Crisis(id, name) {
        this.id = id;
        this.name = name;
    }
    return Crisis;
}());
exports.Crisis = Crisis;
var CRISISES = [
    new Crisis(21, 'Crisis Center 21'),
    new Crisis(22, 'Crisis Center 22'),
    new Crisis(23, 'Crisis Center 23'),
    new Crisis(24, 'Crisis Center 24'),
    new Crisis(25, 'Crisis Center 25'),
    new Crisis(26, 'Crisis Center 26')
];
var crisisesPromise = Promise.resolve(CRISISES);
var CrisisService = (function () {
    function CrisisService() {
    }
    CrisisService.prototype.getCrisises = function () { return crisisesPromise; };
    CrisisService.prototype.getCrisis = function (id) {
        return crisisesPromise
            .then(function (crisises) { return crisises.find(function (crisis) { return crisis.id === +id; }); });
    };
    CrisisService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CrisisService);
    return CrisisService;
}());
exports.CrisisService = CrisisService;
//# sourceMappingURL=crisis.service.js.map