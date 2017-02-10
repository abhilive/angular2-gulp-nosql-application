import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisListComponent }  from './crisis-center/crisis-list.component';
//import { HeroListComponent }    from './heroes/hero-list.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/heroes', pathMatch: 'full' },
  	{ path: 'crisis-center', loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule' },
  	/*{ path: 'heroes', component: HeroListComponent }*/
];

export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
