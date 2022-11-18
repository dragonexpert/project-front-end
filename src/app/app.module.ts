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
import { GemCardComponent } from './components/gem-card/gem-card.component';
import { CapitalizationPipe } from './pipes/capitalization.pipe';
import { TierComponent } from './components/tier/tier.component';
import { SpiritComponent } from './components/spirit/spirit.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { TierFormatterPipe } from './pipes/tier-formatter.pipe';
import { SpiritFormatterPipe } from './pipes/spirit-formatter.pipe';
import { SingleGemComponent } from './components/single-gem/single-gem.component';
import { SinglePokemonComponent } from './components/single-pokemon/single-pokemon.component';
import { SpiritCardComponent } from './components/spirit-card/spirit-card.component';
import { SocialMediaCardComponent } from './components/social-media-card/social-media-card.component';
import { GalleryBonusCardComponent } from './components/gallery-bonus-card/gallery-bonus-card.component';
import { UpdateAccountComponent} from "./components/update-account/update-account.component";
import { ProfileComponent } from './components/profile/profile.component';

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
    RankingCardComponent,
    GemCardComponent,
    CapitalizationPipe,
    TierComponent,
    SpiritComponent,
    PokemonCardComponent,
    TierFormatterPipe,
    SpiritFormatterPipe,
    SingleGemComponent,
    SinglePokemonComponent,
    SpiritCardComponent,
    SocialMediaCardComponent,
    GalleryBonusCardComponent,
    UpdateAccountComponent,
    ProfileComponent
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
