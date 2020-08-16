import { HotelsComponent } from './pages/hotels/hotels.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './partials/nav/nav.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { LoginComponent } from './pages/login/login.component';
import { MysiteComponent } from './pages/mysite/mysite.component';
import { SearchComponent } from './pages/search/search.component';
import { FinderComponent } from './pages/finder/finder.component';
import { ThanksComponent } from './pages/thanks/thanks.component';
import { DefaultSearchComponent } from './pages/default-search/default-search.component';


const routes: Routes = [
  { path: '', redirectTo: 'forside', pathMatch: 'full' },
  { path: 'forside', component: FrontPageComponent },
  { path: 'hotels', loadChildren: () => import('./pages/hotels/hotels.module').then(m => m.HotelsModule) },
  { path: 'resevation', component: ReservationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mysite', component: MysiteComponent },
  { path: 'search', component: DefaultSearchComponent },
  { path: 'search/:dest/:id', component: FinderComponent },
  { path: 'thankyou', component: ThanksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }