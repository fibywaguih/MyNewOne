import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeefComponent } from './beef/beef.component';
import { ChickenComponent } from './chicken/chicken.component';
import { DessertComponent } from './dessert/dessert.component';
import { JuiceComponent } from './juice/juice.component';
import { AppetizersComponent } from './appetizers/appetizers.component';
import { ExtraComponent } from './extra/extra.component';
import { MappingComponent } from './mapping/mapping.component';
import { SeatComponent } from './seat/seat.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignComponent } from './sign/sign.component';


const routes: Routes = [
    {path : 'Beef' , component : BeefComponent},
    {path : 'Chicken' , component : ChickenComponent},
    {path : 'Dessert' , component : DessertComponent},
    {path : 'Juices' , component : JuiceComponent},
    {path : 'Appetizers' , component : AppetizersComponent},
    {path : 'Extra' , component : ExtraComponent},
    {path:'Map' , component:MappingComponent},
    {path:'Seat' , component:SeatComponent},
    {path:'Home' , component:HomeComponent},
    {path:'About' , component:AboutComponent},
    {path:'Sign',component:SignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
