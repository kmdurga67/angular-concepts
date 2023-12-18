import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(form: any) {
    var firstName = form.firstName;
    console.log(firstName);
    var lastName = form.lastName;
    console.log(lastName);
    var comment = form.comment;
    console.log(comment);
  }

}
