import { Pipe, PipeTransform } from '@angular/core';
import { Game } from '../services/data.service';
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(games: Game[], arg: string): Game[] {
    if (!arg || arg?.length < 3) return games;
    let result: Game[] = [];
    for (const game of games) {
      if (game.external.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        result = [...result, game];
      }
    }

    return result;
  }
}
