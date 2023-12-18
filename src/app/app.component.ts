import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data_handling';
  data = ['Durga'];
  showData($event: any) {
    console.log("button is clicked!");
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
