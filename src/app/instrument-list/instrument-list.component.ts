import { Component , OnInit} from '@angular/core';
import { InstrumentCartService } from '../instrument-cart.service';
import { InstrumentDataService } from '../instrument-data.service';
import { Instrument } from './instrument';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.css']
})
export class InstrumentListComponent implements OnInit{

  instruments: Instrument[]= [];
    
  constructor(
    private cart: InstrumentCartService,
    private instrumentsDataService: InstrumentDataService){

  }
  
  ngOnInit(): void {
    this.instrumentsDataService.getAll()
    .subscribe(instruments => this.instruments = instruments);
  }

  addToCart(instrument: Instrument): void{
    this.cart.addToCart(instrument);
    instrument.stock -= instrument.quantity;
    instrument.quantity = 0;
  }
 
}


