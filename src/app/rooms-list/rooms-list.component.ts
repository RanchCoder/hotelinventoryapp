import { Component, Input } from '@angular/core';
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

}
