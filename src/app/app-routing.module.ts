import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {LogoutGuard} from "./guards/logout.guard";
import {RegisterComponent} from "./components/register/register.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {UserGuard} from "./guards/user.guard";
import {BaseComponent} from "./components/base/base.component";
import {AccountComponent} from "./components/account/account.component";

const routes: Routes = [
  { path: "", component: BaseComponent},
  { path: "login", component: LoginComponent, canActivate: [LogoutGuard]},
  { path: "register", component: RegisterComponent, canActivate: [LogoutGuard]},
  { path: "logout", component: LogoutComponent, canActivate: [UserGuard]},
  { path: "account", component: AccountComponent, canActivate: [UserGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { };

