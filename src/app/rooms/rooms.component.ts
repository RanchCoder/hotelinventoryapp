import { Component } from '@angular/core';
import { Room, RoomList } from './room';
import {CommonModule} from '@angular/common';
import { RoomsListComponent } from "../rooms-list/rooms-list.component";

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  room : Room = {
     availableRoom:10,
     totalRoom:20,
     bookedRoom:10
  }  

  showRoomDetails : boolean =this.room.availableRoom != null && this.room?.availableRoom > 0 ? true: false;

  roomList : RoomList[] = [
    {
      roomType:"Deluxe",
      roomNumber:1,
      photo:"https://unsplash.com/photos/gray-bedsprea-w72a24brINI",
      amenities:"Double bed, Shower, TV",
      checkInTime:new Date("20-Nov-2023"),
      checkOutTime: new Date("21-Nov-2023"),
      price:100,
      rating:3.7
    },
    {
      roomType:"Deluxe",
      roomNumber:2,
      photo:"https://unsplash.com/photos/white-2-piece-sofa-and-brown-wooden-coffee-table-1qvUsVrKrMI",
      amenities:"Double bed, Shower, TV",
      checkInTime:new Date("20-Nov-2023"),
      checkOutTime: new Date("21-Nov-2023"),

      price:100,
      rating:3.7
    },
    {
      roomType:"Private Suite",
      roomNumber:3,
      photo:"https://unsplash.com/photos/a-room-with-a-bed-and-a-mirror-Y-bJWAjPzsY",
      amenities:"Double bed, Shower, TV, Swimming Pool",
      checkInTime:new Date("20-Nov-2023"),
      checkOutTime: new Date("21-Nov-2023"),

      price:100,
      rating:3.7
    },
  ]
}
