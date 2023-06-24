import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// Se crea un observable y los metodos para cambiar su valor
export class SpinnerService {
  isLoading$ = new Subject<boolean>();
  show():void{
    this.isLoading$.next(true);
  }
  hide():void{
    this.isLoading$.next(false)
  }
}
