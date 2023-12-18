import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  userName:string="Durga";
  working:string="Working From Home";
  location:string="Varanasi";
  redClass="red";
  blueClass="blue";
  font="green";
  font1="30px";
  constructor() { }

  ngOnInit(): void {
  }
  displayData($event: any) {
    console.log("display Data");
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
  showData($event: any) {
    console.log("button is clicked!");
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }


}

