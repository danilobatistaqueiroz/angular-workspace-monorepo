import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PixService {

  constructor() { }

  pay(){
    console.log('pay() called');
    
  }
  buy(){
    console.log('buy() called');
  }
  transfer(){
    console.log('transfer() called');
  }
}
