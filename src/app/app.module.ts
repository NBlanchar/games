import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LisOfGamesComponent } from './lis-of-games/lis-of-games.component';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { GameLookupComponent } from './game-lookup/game-lookup.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';
import { SuggestComponent } from './suggest/suggest.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SpinnerInterceptor } from './shared/spinner/spinner.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LisOfGamesComponent,
    GameLookupComponent,
    PageNotFountComponent,
    SuggestComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:SpinnerInterceptor, multi:true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
