import { Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const MULTIPLICAR = 'MULTIPLICAR';
export const DIVIDIR = 'DIVIDIR';
export const RESET = 'RESET';

export class Incrementar implements Action {
    readonly type = INCREMENT;
}
export class Decrementar implements Action {
    readonly type = DECREMENT;
}
export class Multiplicar implements Action {
    readonly type = MULTIPLICAR;
    constructor(public payload: number) {}
}
export class Dividir implements Action {
    readonly type = DIVIDIR;
    constructor(public payload: number) { }
}
export class Reset implements Action {
    readonly type = RESET;
}

export type typeActions =
    Multiplicar |
    Dividir     ;

