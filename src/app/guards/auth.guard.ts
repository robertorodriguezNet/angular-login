import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Cuando se intenta acceder a un componente con canActivate:
    // Se mira a ver si existe token
    let token = sessionStorage.getItem('token');

    // Si existe token, devolvemos true y se puede acceder a la página
    if (token) {
      return true;
    } else {
      // Si existe el token, redirigimos a la página de login
      this.router.navigate(['login']);
      return false;
    }
  }
}
