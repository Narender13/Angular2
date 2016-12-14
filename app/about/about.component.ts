// Import component decorator
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Component({
  template: `
    <h2>About</h2>
    <p>List of cats</p>
    <div>
    This repository holds the TypeScript source code of the angular.io quickstart, the foundation for most of the documentation samples and potentially a good starting point for your application.

It's been extended with testing support so you can start writing tests immediately.

This is not the perfect arrangement for your application. It is not designed for production. It exists primarily to get you started quickly with learning and prototyping in Angular

We are unlikely to accept suggestions about how to grow this QuickStart into something it is not. Please keep that in mind before posting issues and PRs.

Prerequisites

Node.js and npm are essential to Angular development.

Get it now if it's not already installed on your machine.

Verify that you are running at least node v4.x.x and npm 3.x.x by running node -v and npm -v in a terminal/console window. Older versions produce errors.

We recommend nvm for managing multiple versions of node and npm.

Create a new project based on the QuickStart
    
    
    
    </div>
    `
})
// Component class
export class aboutComponent{

  
  }

  


