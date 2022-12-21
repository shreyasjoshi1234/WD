import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from '../details.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router,public ser:DetailsService) { }

  ngOnInit(): void {
  }

  
  signup(data:any)
  {
    if(data['password'].length<2)
    {
      alert("Password too small");
    }
      this.ser.adduser(data['username'],data['password'])
      alert("New user added");
      this.router.navigate(['/display']);
}

}
