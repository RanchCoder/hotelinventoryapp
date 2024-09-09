import { Component, EventEmitter, Input , Output} from '@angular/core';
import { RoomList } from '../rooms/room';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent {

    @Input() roomsData : RoomList[] = [];
    @Output() selectedRoom  = new EventEmitter<RoomList>();


    selectedRoomInfo(room : RoomList) {
        this.selectedRoom.emit(room);
      }
}
