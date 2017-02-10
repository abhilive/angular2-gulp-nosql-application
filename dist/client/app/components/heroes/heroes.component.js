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
/**
 * Created by Moiz.Kachwala on 02-06-2016.
 */
var core_1 = require("@angular/core");
var hero_service_1 = require("../../services/hero.service");
var router_1 = require("@angular/router");
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero._id]);
    };
    HeroesComponent.prototype.addHero = function () {
        this.selectedHero = null;
        this.router.navigate(['/detail', 'new']);
    };
    HeroesComponent.prototype.deleteHero = function (hero, event) {
        var _this = this;
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(function (res) {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: './app/components/heroes/heroes.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2hlcm9lcy9oZXJvZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUFnRDtBQUNoRCw0REFBd0Q7QUFFeEQsMENBQXlDO0FBT3pDLElBQWEsZUFBZTtJQU14Qix5QkFDWSxNQUFjLEVBQ2QsV0FBd0I7UUFEeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUksQ0FBQztJQUN6QyxtQ0FBUyxHQUFUO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUNELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELGtDQUFRLEdBQVIsVUFBUyxJQUFVLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRWxELG9DQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGlDQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxvQ0FBVSxHQUFWLFVBQVcsSUFBVSxFQUFFLEtBQVU7UUFBakMsaUJBU0M7UUFSRyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVc7YUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDO2FBQ1osSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNMLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssSUFBSSxFQUFWLENBQVUsQ0FBQyxDQUFDO1lBQ2xELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFBQyxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBO0FBcENZLGVBQWU7SUFMM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSwrQ0FBK0M7S0FDL0QsQ0FBQztxQ0FTc0IsZUFBTTtRQUNELDBCQUFXO0dBUjNCLGVBQWUsQ0FvQzNCO0FBcENZLDBDQUFlIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2hlcm9lcy9oZXJvZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IE1vaXouS2FjaHdhbGEgb24gMDItMDYtMjAxNi5cbiAqL1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hlcm9TZXJ2aWNlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvaGVyby5zZXJ2aWNlXCI7XG5pbXBvcnQge0hlcm99IGZyb20gXCIuLi8uLi9tb2RlbHMvaGVyb1wiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1oZXJvZXMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9oZXJvZXMvaGVyb2VzLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIEhlcm9lc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBoZXJvZXM6IEhlcm9bXTtcbiAgICBzZWxlY3RlZEhlcm86IEhlcm87XG4gICAgZXJyb3I6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIGhlcm9TZXJ2aWNlOiBIZXJvU2VydmljZSkgeyB9XG4gICAgZ2V0SGVyb2VzKCkge1xuICAgICAgICB0aGlzLmhlcm9TZXJ2aWNlLmdldEhlcm9lcygpLnRoZW4oaGVyb2VzID0+IHRoaXMuaGVyb2VzID0gaGVyb2VzKTtcbiAgICB9XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0SGVyb2VzKCk7XG4gICAgfVxuICAgIG9uU2VsZWN0KGhlcm86IEhlcm8pIHsgdGhpcy5zZWxlY3RlZEhlcm8gPSBoZXJvOyB9XG5cbiAgICBnb3RvRGV0YWlsKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9kZXRhaWwnLCB0aGlzLnNlbGVjdGVkSGVyby5faWRdKTtcbiAgICB9XG5cbiAgICBhZGRIZXJvKCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkSGVybyA9IG51bGw7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2RldGFpbCcsICduZXcnXSk7XG4gICAgfVxuXG4gICAgZGVsZXRlSGVybyhoZXJvOiBIZXJvLCBldmVudDogYW55KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLmhlcm9TZXJ2aWNlXG4gICAgICAgICAgICAuZGVsZXRlKGhlcm8pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVyb2VzID0gdGhpcy5oZXJvZXMuZmlsdGVyKGggPT4gaCAhPT0gaGVybyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRIZXJvID09PSBoZXJvKSB7IHRoaXMuc2VsZWN0ZWRIZXJvID0gbnVsbDsgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLmVycm9yID0gZXJyb3IpO1xuICAgIH1cbn1cbiJdfQ==
