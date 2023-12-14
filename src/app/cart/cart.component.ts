import { Component, OnInit } from '@angular/core';
import { InstrumentCartService } from '../instrument-cart.service';
import { Instrument } from '../instrument-list/instrument';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartList!: Instrument[] ;
  
  constructor(private cart: InstrumentCartService){
    cart.cartList.subscribe(c=> this.cartList = c);
    
  }
  ngOnInit(): void {
  }

  totalPrice(instrument: Instrument) {
    return (instrument.price);
  }

 
  total(): number {
    let total = 0
      for (let i in this.cartList) {
        total += this.cartList[i].price * this.cartList[i].quantity;
      }
    return total;
  }
  
  removeFromCart(instrument: Instrument) {
    this.cart.removeFromCart(instrument);
  }

}
