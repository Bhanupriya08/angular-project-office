import { Component,Input } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MY APP';

  public alertmsg :string

  public clickedEvent: Event;

  childEventClicked(event: Event) {
    this.clickedEvent = event;
  }

}
