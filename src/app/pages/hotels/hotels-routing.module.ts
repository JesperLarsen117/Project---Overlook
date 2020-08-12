import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels.component';
import { CitysComponent } from '../citys/citys.component';
import { HotelComponent } from '../citys/hotel/hotel.component';


const routes: Routes = [
  { path: '', redirectTo: 'danmark', pathMatch: 'full' },
  { path: 'danmark', component: HotelsComponent, data: { id: 1, name: 'danmark' }, pathMatch: 'full' },
  { path: 'sverige', component: HotelsComponent, data: { id: 2, name: 'sverige' }, pathMatch: 'full' },
  { path: 'finland', component: HotelsComponent, data: { id: 3, name: 'finland' }, pathMatch: 'full' },
  { path: 'norge', component: HotelsComponent, data: { id: 4, name: 'norge' }, pathMatch: 'full' },
  { path: 'tyskland', component: HotelsComponent, data: { id: 5, name: 'tyskland' }, pathMatch: 'full' },
  { path: 'polen', component: HotelsComponent, data: { id: 6, name: 'polen' }, pathMatch: 'full' },
  { path: 'island', component: HotelsComponent, data: { id: 7, name: 'island' }, pathMatch: 'full' },

  { path: 'danmark/:id', component: CitysComponent },
  { path: 'sverige/:id', component: CitysComponent },
  { path: 'finland/:id', component: CitysComponent },
  { path: 'norge/:id', component: CitysComponent },
  { path: 'tyskland/:id', component: CitysComponent },
  { path: 'polen/:id', component: CitysComponent },
  { path: 'island/:id', component: CitysComponent },

  { path: 'danmark/:id/:hotelId', component: HotelComponent },
  { path: 'sverige/:id/:hotelId', component: HotelComponent },
  { path: 'finland/:id/:hotelId', component: HotelComponent },
  { path: 'norge/:id/:hotelId', component: HotelComponent },
  { path: 'tyskland/:id/:hotelId', component: HotelComponent },
  { path: 'polen/:id/:hotelId', component: HotelComponent },
  { path: 'island/:id/:hotelId', component: HotelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
