import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../core/shared/services';
import { StorageTypes } from '../../core/shared/services/storage/models/storage-types.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.login();
    }
  }

  public login(): void {
    this.authService.login(this.loginForm.value, StorageTypes.local)
      .subscribe(
        (res) => {
          console.log('User Logged in', res);
          this.router.navigateByUrl('/');
        },
        (err) => {
          console.log(err);
        },
    );
  }

}
