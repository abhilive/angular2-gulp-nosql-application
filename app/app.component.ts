import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>Component Router</h1>
    <nav>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/crisis-center">Crisis Center</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }

