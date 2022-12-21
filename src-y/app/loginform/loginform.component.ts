import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})

export class LoginformComponent {

  constructor(private router: Router) {}


submit(login: any){
  if(login['email'] === "eval@eval.com" && login['password'] == "123"){
    console.log("Status: Successfully logged in")
    // If login is successful then navigate to ticket booking
    this.router.navigate(["booking"]);
    alert("Logged in Successfully")
  }else{
    console.log("Status: Invalid credentials")
    alert("Invalid Username OR Password!")
  }
  
}
}