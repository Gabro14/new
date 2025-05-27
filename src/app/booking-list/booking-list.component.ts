// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-booked-rooms',
//   templateUrl: './booking-list.component.html',
//   styleUrls: ['./booking-list.component.css'],
//   imports: [CommonModule, HttpClient, FormsModule, ]  
  
// })
// export class BookedRoomsComponent implements OnInit {
//   bookings: any[] = [];
//   loading: boolean = false;

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.fetchBookings();
//   }

//   fetchBookings(): void {
//     this.loading = true;

//     // ჩაანაცვლე ეს სწორი GET ბმულით თუ სხვა ბმულია bookings წამოსაღებად
//     this.http.get<any[]>('https://hotelbooking.stepprojects.ge/api/Booking')
//       .subscribe({
//         next: (data) => {
//           this.bookings = data;
//           this.loading = false;
//         },
//         error: (error) => {
//           console.error('შეცდომა bookings მიღებისას:', error);
//           this.loading = false;
//         }
//       });
//   }

//   deleteBooking(id: number): void {
//     if (!confirm('დარწმუნებული ხარ რომ გინდა წაშლა?')) return;

//     // ჩასვი ზუსტი delete ბმული თუ განსხვავებულია
//     this.http.delete(`https://hotelbooking.stepprojects.ge/api/Booking/${id}`)
//       .subscribe({
//         next: () => {
//           alert('წარმატებით წაიშალა!');
//           this.bookings = this.bookings.filter(b => b.id !== id);
//         },
//         error: (error) => {
//           console.error('შეცდომა წაშლისას:', error);
//           alert('შეცდომა წაშლისას');
//         }
//       });
//   }
// }
