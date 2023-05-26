import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  /**
   * Función de login.
   *
   * @param email del usuario
   * @param password del usuario
   * @returns la respuesta a la petición de login que se realiza sobre la URL
   */
  login(email:string, password:string): Observable<any>{
    let body = {
      email: email,
      password: password
    }
    return this.http.post('https://reqres.in/api/login', body)
  }
}
