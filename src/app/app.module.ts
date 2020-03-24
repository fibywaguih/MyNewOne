import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { db } from './firstcomponent/dbfirst';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChickenComponent } from './chicken/chicken.component';
import { BeefComponent } from './beef/beef.component';
import { DessertComponent } from './dessert/dessert.component';
import { JuiceComponent } from './juice/juice.component';
import { AppetizersComponent } from './appetizers/appetizers.component';
import { ExtraComponent } from './extra/extra.component';
import { MappingComponent } from './mapping/mapping.component';
import { SeatComponent } from './seat/seat.component';
import { NgxPopper } from 'angular-popper';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignComponent } from './sign/sign.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { dbhome } from './home/dbhome'
@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    ChickenComponent,
    BeefComponent,
    DessertComponent,
    JuiceComponent,
    AppetizersComponent,
    ExtraComponent,
    MappingComponent,
    SeatComponent,
    HomeComponent,
    AboutComponent,
    SignComponent,
    FooterComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    NgxPopper,
    BrowserAnimationsModule
  ],
  providers: [
    db,
    dbhome
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
