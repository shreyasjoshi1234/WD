import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(public class1:DetailsService,private router:Router) { }

  locallist=this.class1.details;

  add(name:any,usn:any,ID:any,issued:any)
  {
    this.class1.addnew(name,usn,ID,issued);
    alert("New student added");
    this.router.navigate(['display']);

  }

  update(ID:any,issued:any)
  {
    console.log("---------",ID,issued);
    this.class1.updatelist(ID,issued);
    alert("Edited");
  }

  deletestu(ID:any)
  {
    this.class1.delete(ID);
    console.log("---------",ID);

    alert("Deleted");

  }
  ngOnInit(): void {
  }

}
