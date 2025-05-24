// import { Component, OnInit } from '@angular/core';
// import { ApiService } from '../api.service';

// @Component({
//   selector: 'app-booking-list',
//   templateUrl: './booking-list.component.html',
//   styleUrls: ['./booking-list.component.scss']
// })
// export class BookingListComponent implements OnInit {
//   bookings: any[] = [];
//   loading = true;

//   constructor(private apiService: ApiService) {}

//   ngOnInit(): void {
//     this.fetchBookings();
//   }

//   fetchBookings() {
//     this.loading = true;
//     this.apiService.getAllBookings().subscribe({
//       next: (resp: any[]) => {
//         this.bookings = resp;
//         this.loading = false;
//       },
//       error: () => this.loading = false
//     });
//   }

//   deleteBooking(id: string) {
//     if (confirm('დარწმუნებული ხარ რომ გინდა წაშლა?')) {
//       this.apiService.deleteBooking(id).subscribe(() => {
//         this.bookings = this.bookings.filter(b => b.id !== id);
//       });
//     }
//   }
// }
