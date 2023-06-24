import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutletContext, Router } from '@angular/router';
import { DataService, Game } from '../services/data.service';
import { DataGame } from '../game-lookup/game-lookup.component';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.component.html',
  styleUrls: ['./suggest.component.scss'],
})
export class SuggestComponent implements OnInit {
  @Output() newGameEvent = new EventEmitter<string>();
  @Input() listGames: Game[] = [];
  message: string = '';

  constructor(
    private readonly data: DataService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  goToGameLookup(id: string): void {
    this.newGameEvent.emit(id);
  }
}
