import { typeActions, INCREMENT, DECREMENT, MULTIPLICAR, DIVIDIR, RESET } from 'src/app/store-app/counter.actions';

export interface AppState {
  count: number;
}

const initialState = 10;

export function counterReducer(state: number = initialState, action: typeActions) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case MULTIPLICAR:
      console.log(action);
      return state * action.payload;

    case DIVIDIR:
      return state / action.payload;

    case RESET:
      return 0;

    default:
      return state;
  }
}
