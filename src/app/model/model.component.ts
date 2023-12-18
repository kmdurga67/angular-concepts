import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
    name:string='';
  constructor() { }

  ngOnInit(): void {
  }
  setValue(){
    this.name="Durga"; 
    console.log("Name is displayed"); 
  }

}
