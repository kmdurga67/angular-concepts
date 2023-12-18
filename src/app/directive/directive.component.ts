import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  flagvalue: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  isLogIn: boolean = false;
  isLogOut: boolean = true;

}
