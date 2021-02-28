import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  
  @Input() event: Event;
  
  childData : string


  
  constructor() { }

  ngOnInit(): void {
    // this.childData =this.listData+"xyz"
    // console.log(this.listData)
    // console.log(this.childData)
  }

}
