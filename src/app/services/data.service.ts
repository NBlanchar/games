import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
export interface Game {
  gameID: string;
  steamAppID?: null;
  cheapest: string;
  cheapestDealID: string;
  external: string;
  internalName: string;
  thumb: string;
}

export interface SearchGame{
  games:Game[];
  message:string
}

const initGames:SearchGame={
  games:[],
  message:'Debe realizar una busqueda de minimo 2 caracteres'
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private games$ = new BehaviorSubject<SearchGame>(initGames);
  private readonly API= environment.api; 
  constructor(private readonly http:HttpClient) {}


  get getFilter$():Observable<SearchGame>{
    return this.games$.asObservable();
  }

  setFilter(games:SearchGame):void{
    this.games$.next(games);
  }

  getGames(game:string):Observable<Game[]>{
    return this.http.get<Game[]>(`${this.API}games?title=${game}&limit=10`);
  }
}
