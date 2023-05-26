import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RestirctedPageComponent } from './pages/restircted-page/restircted-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { PrincipalMenuComponent } from './includes/principal-menu/principal-menu.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import{ HttpClientModule} from '@angular/common/http';
import{ FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RestirctedPageComponent,
    NotFoundPageComponent,
    PrincipalMenuComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
