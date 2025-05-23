import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-rooms.component.html',
  styleUrl: './all-rooms.component.scss'
})
export class HomeComponent {
  constructor(private api : ApiService){}

  hotelArr : any[] = []

  buttonTExt= "Show"

  ngOnInit(){
    this.api.getAll().subscribe((resp:any) => {
      console.log(resp)
      this.hotelArr = resp
    })
  }

}
