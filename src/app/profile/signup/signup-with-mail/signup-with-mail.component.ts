import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-signup-with-mail',
  templateUrl: './signup-with-mail.component.html',
  styleUrls: ['./signup-with-mail.component.sass']
})
export class SignupWithMailComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { 
    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/']);
  }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });

  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  get f() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
}

}
