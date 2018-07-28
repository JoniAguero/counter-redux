import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { INCREMENT, DECREMENT, RESET } from './store-app/couter.reducer';

interface AppState {
  count: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private store: Store<AppState>) {

    this.store.select('count').subscribe( res => console.log(res));
   }

  incrementar() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrementar() {
    this.store.dispatch({ type: DECREMENT });
  }

}
