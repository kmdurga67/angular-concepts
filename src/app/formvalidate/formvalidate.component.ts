import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formvalidate',
  templateUrl: './formvalidate.component.html',
  styleUrls: ['./formvalidate.component.css']
})
export class FormvalidateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClick(result:any){
    console.log("User Name:",result.username);
    console.log("User City:",result.usercity);
    console.log("User City:",result.password);
    console.log("User City:",result.email);
    alert("Form Submitted Successfully");
  }

}
