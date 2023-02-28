import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateForm';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
     private router: Router,
     private auth: AuthService,
     private toast: NgToastService
     ){

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }


  onLogin(){
    if(this.loginForm.valid){
      
      //send the obj to db
      this.auth.login(this.loginForm.value)
        .subscribe({
          next:(res) => {
            //alert(res.message)
            this.toast.success({detail: "SUCCESS", summary: res.message, duration: 5000});
            this.router.navigate(["/"]);
          },
          error:(err) => {
            //alert(err?.error.message);            
            this.toast.error({detail: "ERROR", summary: err.error.message, duration: 5000});
          }
        });
      
    }
    else{
      //throw the error using toaster and with required fields
      ValidateForm.validateAllFormFields(this.loginForm);
      
      //  alert("invalid");
    }
  }

}

