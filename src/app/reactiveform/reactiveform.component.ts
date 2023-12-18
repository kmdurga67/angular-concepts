import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required]),
    usercity: new FormControl('', [Validators.required]),
  });
  get f(){
     return this.form.controls;
  }
submit(){
  console.log(this.form.value);
}
}



 

 