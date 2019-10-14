import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  angForm: FormGroup;
  title = 'reactive-forms';

  constructor(private fb:FormBuilder){
    this.createFormControl()
  }

    createFormControl(){
      this.angForm = this.fb.group({
        email: ['',[Validators.required]],
        password: ['',[Validators.required]]
      });
  }

  onClickSubmit(){
    if(!this.angForm.valid){
      alert('From is not valid');
      return false;
    }
    else{
      alert('From is valid');
      alert("email address is -->>"+this.angForm.get('email').value);
    }
    
  }
}
