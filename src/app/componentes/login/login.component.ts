import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    this.formulario = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login(this.formulario.controls['email'].value, this.formulario.controls['password'].value)
      .then( response => {
        localStorage.setItem('token', response.access_token);
        this.router.navigate(['']);
      }).catch( error => {
        console.log('Error al hacer login');
      });
  }

}
