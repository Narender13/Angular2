import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
//import { dogRoutes }    from './dogs/dog.routes';
//import { catRoutes }    from './cats/cat.routes';
import { AppComponent }         from './app.component';
import { CatListComponent }   from './Cats/cat-list.component';
import { CatDetailsComponent }  from './Cats/cat-details.component';
import { DogListComponent }      from './Dogs/dog-list.component';
import { DogDetailsComponent }  from './Dogs/dog-details.component';
import { aboutComponent }  from './about/about.component';
import{PageNotFoundComponent} from './404notfound/pagenotfound.component';
import { PetService }          from './pet.service';
import { Pet }          from './pet';
import { routing } from './app.routes';

@NgModule({
  imports: [ BrowserModule,FormsModule, HttpModule,JsonpModule,routing],
  declarations: [AppComponent,CatListComponent,CatDetailsComponent,DogListComponent,DogDetailsComponent,aboutComponent,PageNotFoundComponent],
  providers: [ PetService],
  bootstrap: [ AppComponent,CatListComponent,CatDetailsComponent,DogListComponent,DogDetailsComponent,aboutComponent,PageNotFoundComponent]
})
export class AppModule {

}

