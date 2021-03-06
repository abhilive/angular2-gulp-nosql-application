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
var router_1 = require('@angular/router');
var crisis_service_1 = require('./crisis.service');
var CrisisDetailComponent = (function () {
    function CrisisDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    CrisisDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.service.getCrisis(id).then(function (crisis) { return _this.crisis = crisis; });
        });
    };
    CrisisDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CrisisDetailComponent.prototype.gotoCrisises = function () { this.router.navigate(['/crisis-center']); };
    CrisisDetailComponent = __decorate([
        core_1.Component({
            template: "\n  <h2>CRISISES</h2>\n  <div *ngIf=\"crisis\">\n    <h3>\"{{crisis.name}}\"</h3>\n    <div>\n      <label>Id: </label>{{crisis.id}}</div>\n    <div>\n      <label>Name: </label>\n      <input [(ngModel)]=\"crisis.name\" placeholder=\"name\"/>\n    </div>\n    <p>\n      <button (click)=\"gotoCrisises()\">Back</button>\n    </p>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, crisis_service_1.CrisisService])
    ], CrisisDetailComponent);
    return CrisisDetailComponent;
}());
exports.CrisisDetailComponent = CrisisDetailComponent;
//# sourceMappingURL=crisis-detail.component.js.map