import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';

import { routing, appRoutingProviders } from './app.routing';

import { HeroesModule } from './heroes/heroes.module';

import { CrisisCenterModule }  from './crisis-center/crisis-center.module';

//import { CrisisListComponent }  from './crisis-center/crisis-list.component';

//import { DialogService } from './dialog.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    HeroesModule,
    CrisisCenterModule
  ],
  declarations: [
    AppComponent,
    //CrisisListComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
