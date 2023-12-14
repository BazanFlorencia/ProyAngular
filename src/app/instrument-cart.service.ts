import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Instrument } from './instrument-list/instrument';




@Injectable({
  providedIn: 'root'
})

export class InstrumentCartService {
 

  private _cartList: Instrument[] = [];
  cartList: BehaviorSubject<Instrument[]> = new BehaviorSubject(this._cartList);
  

  constructor() { }

  addToCart(instrument: Instrument) {
    let item : Instrument | undefined = this._cartList.find ((v1) => v1.name == instrument.name); 
    if (!item){
      this._cartList.push({... instrument});
    } else {
      item.quantity += instrument.quantity;
    }
    this.cartList.next(this._cartList);
  }
  removeFromCart(instrument: Instrument) {
    let item: Instrument  = this._cartList.find((v1) => v1.name == instrument.name)!;
    let indice = this._cartList.indexOf(instrument);
    if(item){
      this._cartList.splice(indice, 1);
    }
    this.cartList.next(this._cartList);
  }
}
 

