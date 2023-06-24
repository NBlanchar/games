import { Component, OnInit } from '@angular/core';
import { DataService, Game } from '../services/data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-lis-of-games',
  templateUrl: './lis-of-games.component.html',
  styleUrls: ['./lis-of-games.component.scss'],
})
export class LisOfGamesComponent implements OnInit {

  listGames: Game[] = [];
  message: string = '';

  constructor(
    private readonly data: DataService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.getfilter();
  }

  getfilter(): void {
    this.data.getFilter$.subscribe((search) => {
      this.listGames = [...search.games];
      this.message = search.message;
    });
  }
  goToGameLookup(id: string): void {
    this.router.navigate(['game', id]);
  }
}
