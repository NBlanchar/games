import { Component} from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  // permite mostrar el loading al momento de 
  isLoading$=this.spinnerSvc.isLoading$;
  constructor( private readonly spinnerSvc:SpinnerService) { }


}
