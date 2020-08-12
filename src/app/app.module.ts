import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Http
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './partials/nav/nav.component';
import { FooterComponent } from './partials/footer/footer.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { HotelsComponent } from './pages/hotels/hotels.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderImageHandlerComponent } from './partials/header-image-handler/header-image-handler.component';
import { CitysComponent } from './pages/citys/citys.component';
import { SearchComponent } from './partials/search/search.component';
import { HotelComponent } from './pages/citys/hotel/hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    FrontPageComponent,
    HotelsComponent,
    RoomsComponent,
    ReservationComponent,
    LoginComponent,
    AboutComponent,
    HeaderImageHandlerComponent,
    CitysComponent,
    SearchComponent,
    HotelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
