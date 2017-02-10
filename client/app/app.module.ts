import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
/*import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; */
import { MaterialModule } from '@angular/material';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { ProjectsComponent } from './components/projects/projects.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { ProjectDetailComponent }  from './components/projectDetail/project-detail.component';

import { ProjectService }  from './services/project.service';

@NgModule({
  imports: [
    //NgbModule.forRoot(),
    MaterialModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectsComponent,
    ProjectDetailComponent
  ],
  providers: [
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }