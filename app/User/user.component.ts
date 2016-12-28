import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'user',
  template: `
  <style>
  .user{
    margin-top: 30px;

  }
  .row div{
margin-bottom:5px;
  }
  .edit{
    margin-left:5px;
  }
 </style>
 


<div class="user">
<div *ngFor="let list of userdetail;let i=index" class="row">
<div class="col-sm-3">{{list.firstName}}</div>
<div class="col-sm-3">{{list.lastName}}</div>
<div class="col-sm-3">{{list.email}}</div>
<div class="col-sm-3"> <button type="button" (click)='deleteuser(i)' class="btn btn-primary">Delete</button><button type="button" (click)='editeuser(i);' class="btn edit btn-primary">edit</button></div>
</div>
   <form  [formGroup]="userForm" class="form-horizontal">

  <div class="form-group form-group-sm">
    <label for="name" class="col-sm-3 control-label">First Name</label>
    <div class="col-sm-8">
      <input [formControl]="userForm.controls['firstName']" type="text"/>
    </div>
  </div>

  <div class="form-group form-group-sm">
    <label for="name" class="col-sm-3 control-label">Last Name</label>
    <div class="col-sm-8">
      <input  [formControl]="userForm.controls['lastName']" type="text"/>
    </div>
  </div>

  <div class="form-group form-group-sm">
    <label for="name" class="col-sm-3 control-label">Email</label>
    <div class="col-sm-8">
      <input  [formControl]="userForm.controls['email']" type="text"/>
    </div>
  </div>

 
  <div class="form-group">
    <div class="col-sm-offset-3 col-sm-8">
      <button type="button" (click)='adduser(userForm.value);' class="btn btn-primary">Add</button>
    </div>
  </div>
</form> 
</div>
  `,
  // Deprecated
  // Tell component to use router directives
  // directives: [ROUTER_DIRECTIVES]
})

// App Component class
export class userComponent{
   a:string="hii";
   userForm : FormGroup;
   userdetail : UserDetail[] = [];
   constructor(fb: FormBuilder){
    this.userForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'firstName' : null,
      // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
      'lastName': null,
       email : null,
    })
    this.userdetail = [
      {
    'firstName':'Naren',
     'lastName':'Sorout',
      'email':'email',
     },
       {
     'firstName':'Naren',
     'lastName':'Sorout',
     'email':'email',
   }
]
  }
adduser(user:any){
this.userdetail.push(
{
'firstName':user.firstName,
'lastName':user.lastName,
'email':user.email,


}


); // <--------
 console.log(this.userdetail);    
}


    
}
interface UserDetail {
 firstName:string;
 lastName:string;
 email:string;

}