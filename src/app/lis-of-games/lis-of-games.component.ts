import { Component, OnChanges, OnInit } from '@angular/core';
import { DataService, Game } from '../services/data.service';

@Component({
  selector: 'app-lis-of-games',
  templateUrl: './lis-of-games.component.html',
  styleUrls: ['./lis-of-games.component.scss']
})
export class LisOfGamesComponent implements OnInit  {
  list:string[]=['Juego 1','Juego 2','Juego 3','Juego 4','Juego 5', 'juego 6', 'juego 7'];
  filter:string='';
  listGames$=this.data.getFilter$;
  listGames2:Game[]=[];
  message:string=''

  constructor(private readonly data:DataService) { }

  ngOnInit(): void {
    this.data.getFilter$.subscribe((search)=>{
      this.listGames2=[...search.games]
      this.message=search.message
    })
  }


}
