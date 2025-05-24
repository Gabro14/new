import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  
  


  constructor(private http : HttpClient) { }
  private baseUrl = 'https://hotelbooking.stepprojects.ge/api/Booking';

  filterRoom(postObj : any){
    return this.http.post('https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered', postObj)
  }
  
  roomss(){
    return this.http.get('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll')
  }

  getroomtypes(){
    return this.http.get('https://hotelbooking.stepprojects.ge/api/Rooms/GetRoomTypes')
  }

  getAll(){
        return this.http.get('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll')
  }

  getById(id : number){
    return this.http.get(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
  }
  

  book(postObj : any){
    return this.http.post('https://hotelbooking.stepprojects.ge/api/Booking', postObj)
  }


   getRoomById(id : number){
    return this.http.get(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${id}`)
  }

  updateCart(obj : any){
  return this.http.put('https://restaurant.stepprojects.ge/api/Baskets/AddToBasket', obj)
  }

  update2Cart(postObj : any){
    return this.http.put('https://restaurant.stepprojects.ge/api/Baskets/UpdateBasket', postObj)
  }

  registerUser(postObj : any){
    return this.http.post('https://rentcar.stepprojects.ge/api/Users/register', postObj)
  }


  getAllBookings() {
    return this.http.get<any[]>(this.baseUrl);
  }

  deleteBooking(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

   logInUser(postObj : any){
    return this.http.post('https://rentcar.stepprojects.ge/api/Users/login', postObj)
  }
}
