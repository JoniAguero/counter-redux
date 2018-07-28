import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Multiplicar, Dividir } from '../store-app/counter.actions';
import { AppState } from '../store-app/couter.reducer';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  multiplicar() {
    const action = new Multiplicar(2);
    this.store.dispatch(action);
  }

  dividir() {
    const action = new Dividir(2);
    this.store.dispatch(action);
  }

}
