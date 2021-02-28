import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title ="Contact Component"
  public data = ['Angular','django','Python']
  public selected = this.data[1]


  

  constructor() { }
 


  onSubmit(value){
    console.log(value)
  }
  

 
  
  ngOnInit(): void {}
  



  }


