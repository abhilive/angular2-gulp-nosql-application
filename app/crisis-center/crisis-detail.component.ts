import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { Crisis, CrisisService } from './crisis.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  template: `
  <h2>CRISISES</h2>
  <div *ngIf="crisis">
    <h3>"{{crisis.name}}"</h3>
    <div>
      <label>Id: </label>{{crisis.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="crisis.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="gotoCrisises()">Back</button>
    </p>
  </div>
  `
})
export class CrisisDetailComponent implements OnInit, OnDestroy  {
  crisis: Crisis;
  private sub: Subscription;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService) {}
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
       this.service.getCrisis(id).then(crisis => this.crisis = crisis);
     });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  gotoCrisises() { this.router.navigate(['/crisis-center']); }
}

