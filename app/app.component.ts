import { Component } from '@angular/core';
// Import router directives
// Deprecated
// import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'my-app',
  template: `
    <style>
    .navbar-right{
      padding-right:20px;
      margin-right:0px;
    }
    
    </style>
     <div class="container-fluid">
     <div class="row">
      <div class="demo-layout-transparent mdl-layout mdl-js-layout">
      <header class="mdl-layout__header mdl-layout__header--transparent">
      <nav class=" navbar navbar-inverse">
      <ul class="nav navbar-nav">
      <li class="nav-item active">
      <a class="nav-link"  [routerLink]="['/']">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" [routerLink]="['/cats']">Cats</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" [routerLink]="['/dogs']">Dogs</a>
    </li>
    
  </ul>
  <ul class="nav navbar-nav navbar-right">
      <li class="nav-item">
      <a class="nav-link"  [routerLink]="['/about']">About Us</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" [routerLink]="['/contactUs']">Contact Us</a>
    </li>
    
    
  </ul>
  </nav>
   
      </header>
      </div>
      </div>
      </div>
    <div class="container">
     <div class="row">
      <router-outlet></router-outlet>
      </div>
    </div>
  `,
  // Deprecated
  // Tell component to use router directives
  // directives: [ROUTER_DIRECTIVES]
})

// App Component class
export class AppComponent{}
