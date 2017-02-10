import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';

const crisisesRoutes: Routes = [
  { path: 'crisis-center',  component: CrisisListComponent },
  { path: 'crisis/:id', component: CrisisDetailComponent }
];

export const crisiscenterRouting: ModuleWithProviders = RouterModule.forChild(crisisesRoutes);

