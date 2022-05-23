import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { ExploreTrendingComponent } from './home/explore-trending/explore-trending.component';
import { FooterComponent } from './home/footer/footer.component';
import { JumbotronComponent } from './home/jumbotron/jumbotron.component';
import { MusicGridComponent } from './home/music-grid/music-grid.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { PhonesComponent } from './home/phones/phones.component';
import { SearchComponent } from './home/search/search.component';
import { ThankyouComponent } from './home/thankyou/thankyou.component';
import { LearnMoreModule } from './learn-more/learn-more.module';
import { LogInModule } from './log-in/log-in.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { GettingStartedModule } from './getting-started/getting-started.module';
import { TryFreeModule } from './try-free/try-free.module';
import { ExploreTrendingModule } from './explore-trending/explore-trending.module';
import { ProfileModule } from './profile/profile.module';
import { EngageModule } from './engage/engage.module';
import { MonetizationModule } from './monetization/monetization.module';
import { FourmModule } from './fourm/fourm.module';
import { ErrorPathModule } from './error-path/error-path.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    ExploreTrendingComponent,
    FooterComponent,
    JumbotronComponent,
    MusicGridComponent,
    NavBarComponent,
    PhonesComponent,
    SearchComponent,
    ThankyouComponent,
  ],
  imports: [
    BrowserModule,
    LearnMoreModule,
    LogInModule,
    SignUpModule,
    GettingStartedModule,
    TryFreeModule,
    ProfileModule,
    EngageModule,
    MonetizationModule,
    FourmModule,
    ExploreTrendingModule,
    AppRoutingModule,
    ErrorPathModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
