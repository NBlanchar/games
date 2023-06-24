import { Component, HostListener } from '@angular/core';
import { DataService, Game } from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  filter!: string;
  input: string = '';
  logo = false;
  listGames: Game[] = [];
  
  // Perimite Leer la posición del scroll
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(window.scrollY>0){
      this.logo=true
    }else{
      this.logo=false
    }
  }
  constructor(private readonly data: DataService) {}

  //agregra la lista de video juegos en el observable
  getGames(input: string): void {
    if (input.length > 2) {
      this.data.getGames(input).subscribe((game) => {
        if (game.length > 0) {
          this.data.setFilter({
            games: [...game],
            message: 'Video Juegos Encontrados',
          });
        } else {
          this.data.setFilter({
            games: [...game],
            message:
              'No se ha encontrado videojuego con ese nombre intenta nuevamente',
          });
        }
      });
    } else {
      this.data.setFilter({
        games: [],
        message: 'Debe realizar una busqueda de minimo 2 letras',
      });
    }
  }
}
