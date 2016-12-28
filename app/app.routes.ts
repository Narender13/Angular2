// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { dogRoutes }    from './dogs/dog.routes';
//import { catRoutes }    from './cats/cat.routes';

import { CatListComponent } from './Cats/cat-list.component';
import { CatDetailsComponent } from './Cats/cat-details.component';
import { DogListComponent }    from './Dogs/dog-list.component';
import { DogDetailsComponent }    from './Dogs/dog-details.component';
import { aboutComponent }    from './about/about.component';
import{PageNotFoundComponent} from './404notfound/pagenotfound.component';
import {formvalidateComponent} from './contact_us/contact_us.component'
import {userComponent} from './User/user.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dogs',
    pathMatch: 'full'
  },
  { path: 'about', component: aboutComponent },
  { path: 'cats', component: CatListComponent },
  { path: 'cats/:id', component: CatDetailsComponent },
  { path: 'dogs', component: DogListComponent },
  { path: 'contactUs', component: formvalidateComponent },
  { path: 'dogs/:id', component: DogDetailsComponent },
   { path: 'user', component: userComponent },
  { path: '**', component: PageNotFoundComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
