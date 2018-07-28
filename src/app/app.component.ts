import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { INCREMENT, DECREMENT } from './store-app/counter.actions';
import { AppState } from './store-app/couter.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  contador: number;

  constructor(private store: Store<AppState>) {

    this.store.select('count').subscribe( res => this.contador = res);
   }

  incrementar() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrementar() {
    this.store.dispatch({ type: DECREMENT });
  }

}
