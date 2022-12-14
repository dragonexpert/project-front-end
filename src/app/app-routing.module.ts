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
import {TierComponent} from "./components/tier/tier.component";
import {SpiritComponent} from "./components/spirit/spirit.component";
import {SingleGemComponent} from "./components/single-gem/single-gem.component";
import {SinglePokemonComponent} from "./components/single-pokemon/single-pokemon.component";
import {UpdateAccountComponent} from "./components/update-account/update-account.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AddAccountComponent} from "./components/add-account/add-account.component";
import {DeleteAccountComponent} from "./components/delete-account/delete-account.component";

const routes: Routes = [
  { path: "", component: BaseComponent},
  { path: "login", component: LoginComponent, canActivate: [LogoutGuard]},
  { path: "register", component: RegisterComponent, canActivate: [LogoutGuard]},
  { path: "logout", component: LogoutComponent, canActivate: [UserGuard]},
  { path: "account", component: AccountComponent, canActivate: [UserGuard]},
  { path: "account/add", component: AddAccountComponent, canActivate: [UserGuard]},
  { path: "account/delete/:id", component: DeleteAccountComponent, canActivate: [UserGuard]},
  { path: "account/update/:id", component: UpdateAccountComponent, canActivate: [UserGuard]},
  { path: "faq", component: FaqComponent},
  { path: "guides", component: GuidesComponent},
  { path: "guides/:tab", component: GuidesComponent},
  { path: "future", component: FutureComponent},
  { path: "events", component: EventsComponent},
  { path: "codes", component: CodesComponent},
  { path: "rankings", component: RankingsComponent},
  { path: "rankings/page/:page", component: RankingsComponent},
  { path: "rankings/:order", component: RankingsComponent},
  { path: "rankings/:order/page/:page", component: RankingsComponent},
  { path: "gems/exclusive/:exclusive", component: GemsComponent},
  { path: "gems/:id", component: SingleGemComponent},
  { path: "gems", component: GemsComponent},
  { path: "socialmedia", component: SocialMediaComponent},
  { path: "pokemon/name/:id", component: SinglePokemonComponent},
  { path: "pokemon", component: PokemonComponent},
  { path: "pokemon/badge/:badge", component: PokemonComponent},
  { path: "pokemon/gem/:gem", component: PokemonComponent},
  { path: "pokemon/spirit/:spirit", component: PokemonComponent},
  { path: "pokemon/tier/:tier", component: PokemonComponent},
  { path: "pokemon/type/:type", component: PokemonComponent},
  { path: "gallery", component: GalleryComponent},
  { path: "gallery/:bonus", component: GalleryComponent},
  { path: "donations", component: DonationsComponent},
  { path: "admin", component: AdminComponent, canActivate: [AdminGuard]},
  { path: "admin/:tab", component: AdminComponent, canActivate: [AdminGuard]},
  { path: "changepassword", component: ChangePasswordComponent, canActivate: [UserGuard]},
  { path: "tier", component: TierComponent},
  { path: "spirit", component: SpiritComponent},
  { path: "user/:name", component: ProfileComponent},
  { path: "**", component: BaseComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { };
