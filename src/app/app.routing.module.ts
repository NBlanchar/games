import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LisOfGamesComponent } from './lis-of-games/lis-of-games.component';
import { GameLookupComponent } from './game-lookup/game-lookup.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LisOfGamesComponent },
  { path: 'game/:gameId', component: GameLookupComponent },
  { path: '**', component: PageNotFountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
