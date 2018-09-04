import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService, AuthService } from '../../core/shared/services';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private userService: UserService, private authService: AuthService,
  private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repeatPassword: new FormControl('', Validators.required),
    });
  }

  public createUser() {
    if (this.registerForm.valid) {
      this.userService.createUser(this.registerForm.value).subscribe(
        (res: any) => {
          console.log(res);
          this.authService.setSessionOnRegister(res);
          this.router.navigateByUrl('/');
        },
        err => console.log(err)
      );
    }
  }

}
