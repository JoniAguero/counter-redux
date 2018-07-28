import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { RESET, Multiplicar } from '../store-app/counter.actions';
import { AppState } from '../store-app/couter.reducer';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  reset() {

  }

}
