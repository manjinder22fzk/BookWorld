import { Component, OnInit,ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  @ViewChild('fform') registerFormDirective;


  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.registerForm=this.fb.group({
      name:['',Validators.required],
      password:['',Validators.required],
      contact:['',Validators.required],
      email:['',Validators.required]
    })
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.registerForm.reset(
      {
        name: '',
        password: '',
        contact: '',
        email: ''
      }
    );
    this.registerFormDirective.resetForm();
  }

}
