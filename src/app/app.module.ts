import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './navigation-components/footer/footer.component';
import { FundingStatusComponent } from './navigation-components/funding-status/funding-status.component';
import { MenuBarComponent } from './navigation-components/menu-bar/menu-bar.component';
import { UpdateBarComponent } from './navigation-components/update-bar/update-bar.component';
import { HomeMoneyComponent } from './pages/home-money/home-money.component';
import { MakeComponent } from './pages/make/make.component';
import { KeepComponent } from './pages/keep/keep.component';
import { GrowComponent } from './pages/grow/grow.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';



@NgModule({
  declarations: [
    AppComponent,
    UpdateBarComponent,
    MenuBarComponent,
    FundingStatusComponent,
    FooterComponent,
    HomeMoneyComponent,
    MakeComponent,
    KeepComponent,
    GrowComponent,
    AboutUsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
