import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() { }

  details=[
    {name:"SJpppp", usn:"01fe20bcs145", ID:181,issued:1},
    {name:"SJ", usn:"01fe20bcs145", ID:182,issued:2},
    {name:"kkkkkk", usn:"01fe20bcs145", ID:183,issued:3},
    {name:"Shree Hari", usn:"01fe20bcs145", ID:184,issued:4},
    {name:"Shree Hari", usn:"01fe20bcs145", ID:185,issued:5}
  ];

  users=[
              {name:"sj",password:"123"},
              {name:"ss",password:"123"}
];

  adduser(name:any,password:any)
  {
    this.users.push({name:name,password:password})
  }
  
  addnew(name:any,usn:any,ID:any,issued:any)
  {
    this.details.push({name:name,usn:usn,ID:ID,issued:issued});
  }
  updatelist(ID:any,issued:any)
  {
    for(var i=0;i<this.details.length;i++)
    {
      
      if(this.details[i].ID==ID)
      {
        console.log("Found");
        this.details[i].issued=issued;
      }
    }
  }
  ind:number=0;

  delete(ID:any)
  {
    for(var i=0;i<this.details.length;i++)
    {
      
      if(this.details[i].ID==ID)
      {
        console.log("Found");
        this.ind=i;
      }
    }

    // this.ind=this.details.indexOf(ID);
    console.log("Found todelete",ID,this.ind);

    this.details.splice(this.ind, 1);
  }

}
