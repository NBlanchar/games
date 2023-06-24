import { Component, OnInit } from '@angular/core';
import {
  DataService,
  Game,
  GameLookup,
  StoreInfo,
} from '../services/data.service';
import { ActivatedRoute, Params } from '@angular/router';

interface Deals {
  thumb: string;
  storeName: string;
  price: string;
  retailPrice: string;
  savings: number;
}

export interface DataGame {
  gameID: string;
  title: string;
  thumb: string;
  deals: Deals[];
}
@Component({
  selector: 'app-game-lookup',
  templateUrl: './game-lookup.component.html',
  styleUrls: ['./game-lookup.component.scss'],
})
export class GameLookupComponent implements OnInit {
  id!: string;
  count: number = 0;
  game!: GameLookup;
  storesInfo: StoreInfo[] = [];
  dataGame!: DataGame;
  suggest:Game[] = [];

  constructor(
    private readonly data: DataService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getParams();
    this.getStoreInfo();
    this.getGameLookup(this.id);
  }
  getParams(): void {
    this.route.params.subscribe(
      (params: Params) => (this.id = params['gameId'])
    );
  }
  //Obtiene la lista de tiendas de la API
  getStoreInfo(): void {
    this.data.getStoresInfo().subscribe((storesinfo) => {
      this.storesInfo = [...storesinfo];
    });
  }
  //Obtiene el detalle del video Juego por id
  getGameLookup(id: string): void {
    this.data.getGameLookup(id).subscribe((game) => {
      game && this.thumbStore(this.storesInfo, game);
    });
  }
  // guarda el videojuego, las ofertas y las imagenes de la tienda
  thumbStore(stores: StoreInfo[], game: GameLookup): void {
    let listDeal: Deals[] = [];
    for (let deal of game.deals) {
      for (let store of stores) {
        if (store.storeID === deal.storeID && listDeal.length < 3) {
          let _deal: Deals = {
            price: deal.price,
            retailPrice: deal.retailPrice,
            savings: Number(deal.savings),
            storeName: store.storeName,
            thumb: store.images.banner,
          };
          listDeal.push(_deal);
        }
      }
    }
    this.dataGame = {
      gameID: this.id,
      title: game.info.title,
      thumb: game.info.thumb,
      deals: listDeal,
    };
    this.getGames(this.dataGame);
  }
  //Obtiene la lista de VideoJuegos por nombre
  getGames(game:DataGame): void {
    let nameGame = game.title.slice(0, 3);
    this.data.getGames(nameGame).subscribe((listGames) => {
      listGames && this.getSuggest([...listGames]);
    });
  }
  // Obtiene las sugerencia de video juego por nombre
  // Seria mucho mejor por categoria pero la api no tiene dicha información
  getSuggest(games: Game[]): void {
    this.suggest.splice(0, 6)
    for (let game of games) {
      if (game.gameID !== this.dataGame.gameID && this.suggest.length < 6) {
        this.suggest.push(game);
      }
    }
  }
}
