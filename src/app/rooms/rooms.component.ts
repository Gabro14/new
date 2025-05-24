import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  roomss: any;
  roomTypes: any;
  roomtypeid: any;
  priceFrom: any;
  priceTo: any;
  maximumGuests: any;
  checkIn: Date = new Date();
  checkOut: Date = new Date();
    constructor(private api : ApiService){}
  
    
  
    buttonTExt= "Show"
  
    ngOnInit(){
      this.api.roomss().subscribe((resp:any) => {
        console.log(resp)
        this.roomss = resp
      })
      this.api.getroomtypes().subscribe((resp:any) => {
        console.log(resp)
        this.roomTypes = resp
        
      })
    }
    filter(){
      this.api.filterRoom({
        roomTypeId: this.roomtypeid,
        priceFrom: this.priceFrom,
        priceTo: this.priceTo,
        maximumGuests: this.maximumGuests,
        checkIn: this.checkIn,
        checkOut: this.checkOut
      }).subscribe((resp:any) => {
        console.log(resp)
        this.roomss = resp
      })
    }

    reset(){
      this.roomtypeid = null;
      this.priceFrom = null;
      this.priceTo = null;
      this.maximumGuests = null;
      this.checkIn = new Date();
      this.checkOut = new Date();
      this.api.roomss().subscribe((resp:any) => {
        console.log(resp)
        this.roomss = resp
      })
    }    

  // "roomTypeId": 0,
  // "priceFrom": 0,
  // "priceTo": 0,
  // "maximumGuests": 0,
  // "checkIn": "2025-05-23T09:27:52.535Z",
  // "checkOut": "2025-05-23T09:27:52.535Z"
  
}
