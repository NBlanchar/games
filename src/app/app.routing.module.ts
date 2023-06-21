import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LisOfGamesComponent } from './lis-of-games/lis-of-games.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LisOfGamesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
