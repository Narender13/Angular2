import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { dogRoutes }    from './dogs/dog.routes';
//import { catRoutes }    from './cats/cat.routes';
import { AppComponent }         from './app.component';
import { CatListComponent }   from './Cats/cat-list.component';
import { CatDetailsComponent }  from './Cats/cat-details.component';
import { DogListComponent }      from './Dogs/dog-list.component';
import { DogDetailsComponent }  from './Dogs/dog-details.component';
import { aboutComponent }  from './about/about.component';
import{PageNotFoundComponent} from './404notfound/pagenotfound.component';
import {formvalidateComponent} from './contact_us/contact_us.component'

import { PetService }          from './pet.service';
import { Pet }          from './pet';
import { routing } from './app.routes';

@NgModule({
  imports: [ BrowserModule,FormsModule, HttpModule,JsonpModule,routing,ReactiveFormsModule],
  declarations: [AppComponent,CatListComponent,CatDetailsComponent,DogListComponent,DogDetailsComponent,aboutComponent,PageNotFoundComponent,formvalidateComponent],
  providers: [ PetService],
  bootstrap: [ AppComponent,CatListComponent,CatDetailsComponent,DogListComponent,DogDetailsComponent,aboutComponent,PageNotFoundComponent,formvalidateComponent]
})
export class AppModule {

}

