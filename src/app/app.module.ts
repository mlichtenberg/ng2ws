import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth.service';

import { HttpModule } from '@angular/http';
import { SignupComponent } from './signup/signup.component';
import { TodoComponent } from './todo/todo.component';
import { todoService } from './shared/services/todo.service';
import { IsLoggedInGuard } from './shared/guards/is-logged-in.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { CookieModule } from 'ngx-cookie';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TodoComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    CookieModule.forRoot()
  ],
  providers: [AuthService, todoService, IsLoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
