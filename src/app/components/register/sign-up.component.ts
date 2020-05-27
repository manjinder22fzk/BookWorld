import { Component, OnInit,ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  @ViewChild('fform') registerFormDirective;


  constructor(
    private fb:FormBuilder, 
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService)  { }

  ngOnInit() {
    this.registerForm=this.fb.group({
      name:['',Validators.required],
      password:['',Validators.required],
      username:['',Validators.required],
      email:['',Validators.required]
    })
  }

  onSubmit() {
    console.log(this.registerForm.value);
    const user = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      username: this.registerForm.value.username,
      password: this.registerForm.value.password
    }

        // Required Fields
        if(!this.validateService.validateRegister(user)) {
          this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
          return false;
        }
    
        // Validate Email
        if(!this.validateService.validateEmail(user.email)) {
        this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
          return false;
        }

           // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success) {
        this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });
        
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
