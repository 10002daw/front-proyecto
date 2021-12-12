import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    this.formulario = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      password2: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.register(
      this.formulario.controls['email'].value, 
      this.formulario.controls['email'].value, 
      this.formulario.controls['password'].value, 
      this.formulario.controls['password2'].value
      ).then( response => {
        console.log(response);
        localStorage.setItem('token', response.token);
        this.router.navigate(['']);
      }).catch( error => {
        console.log(error);
        console.log('Error al registrarse');
      });
  }

}
