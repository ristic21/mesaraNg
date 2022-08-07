import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TimeOpenComponent } from './time-open/time-open.component';
import { HeikoBrathComponent } from './heiko-brath/heiko-brath.component';
import { DryAgedComponent } from './dry-aged/dry-aged.component';
import { GrillkursComponent } from './grillkurs/grillkurs.component';
import { HandwerkComponent } from './handwerk/handwerk.component';
import { SpicesComponent } from './spices/spices.component';
import { FleischversandComponent } from './fleischversand/fleischversand.component';
import { AwardsComponent } from './awards/awards.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimeOpenComponent,
    HeikoBrathComponent,
    DryAgedComponent,
    GrillkursComponent,
    HandwerkComponent,
    SpicesComponent,
    FleischversandComponent,
    AwardsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
