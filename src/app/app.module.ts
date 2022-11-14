import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { BaseComponent } from './components/base/base.component';
import { AccountComponent } from './components/account/account.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FaqComponent } from './components/faq/faq.component';
import { GuidesComponent } from './components/guides/guides.component';
import { FutureComponent } from './components/future/future.component';
import { EventsComponent } from './components/events/events.component';
import { CodesComponent } from './components/codes/codes.component';
import { RankingsComponent } from './components/rankings/rankings.component';
import { GemsComponent } from './components/gems/gems.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DonationsComponent } from './components/donations/donations.component';
import { AdminComponent } from './components/admin/admin.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UnescapePipe } from './pipes/unescape.pipe';
import { FaqCardComponent } from './components/faq-card/faq-card.component';
import { RankingCardComponent } from './components/ranking-card/ranking-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    BaseComponent,
    AccountComponent,
    NavbarComponent,
    FaqComponent,
    GuidesComponent,
    FutureComponent,
    EventsComponent,
    CodesComponent,
    RankingsComponent,
    GemsComponent,
    SocialMediaComponent,
    PokemonComponent,
    GalleryComponent,
    DonationsComponent,
    AdminComponent,
    ChangePasswordComponent,
    UnescapePipe,
    FaqCardComponent,
    RankingCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
