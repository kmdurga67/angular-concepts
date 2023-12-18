import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-date',
  templateUrl: './pipe-date.component.html',
  styleUrls: ['./pipe-date.component.css']
})
export class PipeDateComponent implements OnInit {
  color="violet";
  constructor() { }

  ngOnInit(): void {
  }
  presentDate=new Date();
  

}
