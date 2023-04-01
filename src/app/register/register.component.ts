import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit   {

  registerForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router, 
    private toastr: ToastrService) {}

  ngOnInit(): void { 
    this.registerForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      gender: ['', Validators.required],
      role: [''],
      isActive: true,
    });
  }


  signUp(){
    console.log(this.registerForm.value);

    if(this.registerForm.valid){
      this.auth.register(this.registerForm.value).subscribe(res =>{
        let userData= res;
        console.log(userData);
        this.toastr.success('user added successfully');
        this.router.navigate([''])
      })

    }
    else{
      this.toastr.warning('error invalid');
    }

    // this.auth.addUser(this.registerForm.value).subscribe();
  }
}
