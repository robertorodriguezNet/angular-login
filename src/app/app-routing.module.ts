import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RestirctedPageComponent } from './pages/restircted-page/restircted-page.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'protegida',
    component: RestirctedPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginPageComponent },

  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
