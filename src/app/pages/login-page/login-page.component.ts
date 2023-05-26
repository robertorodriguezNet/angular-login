import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

    email:string = "";
    password: string = "";

  constructor(private router: Router, private authService: AuthService) {

    // Iniciamos e igualamos el token
    let token = sessionStorage.getItem('token');


    // En caso de que el token exista, navegamos al home
    if(token){
      this.router.navigate(['home']);
    }

  }

  ngOnInit(): void {}

  loginUser() {

    console.log("Iniciamos el login");

    // Pedimos el login al servicio y nos suscribimos a la respuesta
    this.authService.login(this.email, this.password).subscribe(
      (response) => {

        // Si en los parámetro devueltos viene token
        if(response.token){
          sessionStorage.setItem('token',response.token);
          this.router.navigate(['protegida']);
        }

      },
      (error) =>
        console.error(`Ha habido un error al hacer login (0): ${error}`),
      () => console.info('Petición de login terminada')
    );
  }
}
