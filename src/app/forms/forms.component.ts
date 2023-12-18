import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClickSubmit(result:any){
    console.log("User Name:"+result.username);
    console.log("User City:"+result.usercity);
    console.log("Password Created:"+result.password);
    console.log("Mobile Number:"+result.number);
    console.log("User Date Of Birth:"+result.email);
  }

}
