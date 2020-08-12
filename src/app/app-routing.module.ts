import { HotelsComponent } from './pages/hotels/hotels.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './partials/nav/nav.component';
import { ReservationComponent } from './pages/reservation/reservation.component';


const routes: Routes = [
  { path: '', redirectTo: 'forside', pathMatch: 'full' },
  { path: 'forside', component: FrontPageComponent },
  { path: 'hotels', loadChildren: () => import('./pages/hotels/hotels.module').then(m => m.HotelsModule) },
  { path: 'resevation', component: ReservationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }