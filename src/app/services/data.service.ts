import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// Interfaces Stores
interface Images {
  banner: string;
  logo: string;
  icon: string;
}

export interface StoreInfo {
  storeID: string;
  storeName: string;
  isActive: number;
  images: Images;
}

//Interfaces Game Lookup
interface Deals {
  storeID: string;
  dealID: string;
  price: string;
  retailPrice: string;
  savings: string;
}
interface CheapestPriceEver {
  price: string;
  date: number;
}
interface Info {
  title: string;
  steamAppID?: string;
  thumb: string;
}

export interface GameLookup {
  info: Info;
  cheapestPriceEver: CheapestPriceEver;
  deals: Deals[];
}

// Interface para List Of Games
export interface Game {
  gameID: string;
  steamAppID?: null;
  cheapest: string;
  cheapestDealID: string;
  external: string;
  internalName: string;
  thumb: string;
}

export interface SearchGame {
  games: Game[];
  message: string;
}

const initGames: SearchGame = {
  games: [],
  message: 'Debe realizar una busqueda de minimo 2 caracteres',
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private games$ = new BehaviorSubject<SearchGame>(initGames);
  private readonly API = environment.api;
  constructor(private readonly http: HttpClient) {}

  //Observable de Lista de Videojuegos
  get getFilter$(): Observable<SearchGame> {
    return this.games$.asObservable();
  }

  setFilter(games: SearchGame): void {
    this.games$.next(games);
  }
  //Consumo de la información de la API
  getGames(game: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.API}games?title=${game}&limit=10`);
  }
  getGameLookup(id: string): Observable<GameLookup> {
    return this.http.get<GameLookup>(`${this.API}/games?id=${id}`);
  }
  getStoresInfo(): Observable<StoreInfo[]> {
    return this.http.get<StoreInfo[]>(`${this.API}/stores`);
  }
}
