import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from '../details.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,public userclass:DetailsService) { }

  ngOnInit(): void {
  }
  msg="";

  usershere=this.userclass.users;

  login(data:any)
  {
    for(var i=0;i<this.usershere.length;i++){
    if(data['username']==this.usershere[i].name && data['password']==this.usershere[i].password)
    {
      alert("User Found");
      this.router.navigate(['/display']);
    }
    else{
      this.msg="Invalid username/password";
      alert("Invalid credentials",);
      this.router.navigate(['/login']);
    }
  }
  }
}