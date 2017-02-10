// TODO SOMEDAY: Feature Componetized like HeroCenter
import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';
import { Crisis, CrisisService }   from './crisis.service';
@Component({
  template: `
    <h2>CRISISES</h2>
    <ul class="items">
      <li *ngFor="let crisis of crisises"
        (click)="onSelect(crisis)">
        <span class="badge">{{crisis.id}}</span> {{crisis.name}}
      </li>
    </ul>
  `
})
export class CrisisListComponent implements OnInit {
  crisises: Crisis[];
  constructor(
    private router: Router,
    private service: CrisisService) { }
  ngOnInit() {
    this.service.getCrisises().then(crisises => this.crisises = crisises);
  }
  onSelect(crisis: Crisis) {
    this.router.navigate(['/crisis', crisis.id]);
  }
}

