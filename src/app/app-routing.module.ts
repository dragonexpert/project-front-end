import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {LogoutGuard} from "./guards/logout.guard";
import {RegisterComponent} from "./components/register/register.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {UserGuard} from "./guards/user.guard";
import {BaseComponent} from "./components/base/base.component";
import {AccountComponent} from "./components/account/account.component";
import {FaqComponent} from "./components/faq/faq.component";
import {GuidesComponent} from "./components/guides/guides.component";
import {FutureComponent} from "./components/future/future.component";
import {EventsComponent} from "./components/events/events.component";
import {CodesComponent} from "./components/codes/codes.component";
import {RankingsComponent} from "./components/rankings/rankings.component";
import {GemsComponent} from "./components/gems/gems.component";
import {SocialMediaComponent} from "./components/social-media/social-media.component";
import {PokemonComponent} from "./components/pokemon/pokemon.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {DonationsComponent} from "./components/donations/donations.component";
import {AdminComponent} from "./components/admin/admin.component";
import {AdminGuard} from "./guards/admin.guard";
import {ChangePasswordComponent} from "./components/change-password/change-password.component";

const routes: Routes = [
  { path: "", component: BaseComponent},
  { path: "login", component: LoginComponent, canActivate: [LogoutGuard]},
  { path: "register", component: RegisterComponent, canActivate: [LogoutGuard]},
  { path: "logout", component: LogoutComponent, canActivate: [UserGuard]},
  { path: "account", component: AccountComponent, canActivate: [UserGuard]},
  { path: "faq", component: FaqComponent},
  { path: "guides", component: GuidesComponent},
  { path: "future", component: FutureComponent},
  { path: "events", component: EventsComponent},
  { path: "codes", component: CodesComponent},
  { path: "rankings", component: RankingsComponent},
  { path: "gems", component: GemsComponent},
  { path: "socialmedia", component: SocialMediaComponent},
  { path: "pokemon", component: PokemonComponent},
  { path: "gallery", component: GalleryComponent},
  { path: "donations", component: DonationsComponent},
  { path: "admin", component: AdminComponent, canActivate: [AdminGuard]},
  { path: "changepassword", component: ChangePasswordComponent, canActivate: [UserGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { };

