import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:MainService, private router:Router) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    id: new FormControl(''),
    email: new FormControl(''),
    fname: new FormControl(''),
    lname: new FormControl('')
  })

  onSubmit(){
    this.service.postData(this.registerForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/listing']);
    })
  }

}
