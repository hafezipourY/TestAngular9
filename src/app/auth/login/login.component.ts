import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginStatus: string;
  insertForm: FormGroup;
  Username: FormControl;
  Password: FormControl;
 
  constructor(private route: ActivatedRoute, public router: Router,private fb: FormBuilder) { }

  onSubmit() {
    
    let userlogin = this.insertForm.value;
    this.router.navigate(['home/dashboard']);

  }

  

 

  ngOnInit() {
     this.Username = new FormControl('');
     this.Password = new FormControl('');
   
  //   // set return url in case of any
  //   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.insertForm = this.fb.group({
      "Username": this.Username,
      "Password": this.Password
    })
  }
  

}
