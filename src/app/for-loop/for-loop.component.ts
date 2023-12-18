import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.css']
})
export class ForLoopComponent implements OnInit {
 name=["Durga","Ruhi","Shreya","Manpriya","Rukshar"];
 view:string="purple";
 list=[
   {id:11,name:"Durga",email:"singhdurga5698@gmail.com"},
   {id:12,name:"Ruhi",email:"ruhihashma@gmail.com"},
   {id:13,name:"Shreya",email:"shreyaghoshal@gmail.com"},
   {id:14,name:"Manpriya",email:"manpriya@gmail.com"},
   {id:15,name:"Rukshar",email:"ruksharfatima@gmail.com"},
   {id:16,name:"Kaushani",email:"kaushani@gmail.com"},
   {id:17,name:"Namrata",email:"namrata@gmail.com"},
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
