import { Component, OnInit,Output,EventEmitter  } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title ='Home Component'
  @Output() listData : string ="this is home-app data"
  @Output() public afterClick: EventEmitter<string> = new EventEmitter();


  public onSubmit(): void {
    this.afterClick.emit('This Data is Coming From Child To Parent - via @Output()');
  }



  // public listData = [
  //   {id:1,
  //   name: 'Priya',
  //   number : 999999999,},
  //   {id:2,
  //   name: 'Ankit',
  //   number: 88888888,
  // }
  // ]



  onClick(event){
   
  }
  
 
    
  
  constructor( public dialog: MatDialog) {}
    openDialog(){
      this.dialog.open(Dialog_1);
    }
    
   
  
  ngOnInit(): void {
  }

}


@Component({
  selector: 'app-home',
  templateUrl: './home-dialog.html',
})
export class Dialog_1 {
  constructor( public dialogRef: MatDialogRef<Dialog_1> ){}
  close() {
    this.dialogRef.close();
  }
}
