import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Instrument } from '../instrument-list/instrument';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit{


  @Input() 
  quantity!: number;

  @Input() 
  max!: number;

  constructor(){}
  
  ngOnInit(): void{}
 
  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();
  
  upQuantity(): void{
    if(this.quantity < this.max)
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }
  downQuantity(): void{
    if(this.quantity > 0)
    this.quantity--;
    this.quantityChange.emit(this.quantity);
  }
  changeQuantity(event: any): void{
    event.preventDefault();
    this.quantityChange.emit(this.quantity);
  }
}
