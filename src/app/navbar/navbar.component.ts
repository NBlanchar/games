import { Component, OnInit } from '@angular/core';
import { DataService, Game } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  filter!: string;
  input: string = '';
  listGames: Game[] = [];

  constructor(private readonly data: DataService) {}

  ngOnInit(): void {}

  prueba(input: string): void {
    console.log('txt', input);
    console.log('tamaño', input.length);
    if (input.length > 2) {
      console.log('entre');
      this.data.getGames(input).subscribe((game) => {
        if(game.length>0){
          this.data.setFilter({games:[...game], message:'Video Juegos Encontrados'});
        }else{
          this.data.setFilter({games:[...game], message:'No se ha encontrado videojuego con ese nombre intenta nuevamente'});
        }
      });
    } else {
      this.data.setFilter({games:[], message:'Debe realizar una busqueda de minimo 2 letras'});
    }
  }
}
