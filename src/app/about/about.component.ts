import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'About'
  hide = true;
  
  @Input() event:any


  firstForm : FormGroup;
  public data = ['Angular','django','Python']
  constructor( private fb : FormBuilder ) { }

  onSubmit(){
    if (this.firstForm.valid){

    console.log(JSON.stringify(this.firstForm.value))
    }
    return null;
  }
  ngOnInit(): void {
    this.firstForm =  this.fb.group({
      name: ['',[Validators.required,Validators.maxLength(20)]],
      email :  ["",[Validators.required, Validators.email]],
      select : ['Angular',Validators.required],
      password : ['',[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]],

    });
    // getErrorMessage() {
    //   if (this.email.hasError('required')) {
    //     return 'You must enter a value';
    //   }
  
    //   return this.email.hasError('email') ? 'Not a valid email' : '';
    // }
  }

}
