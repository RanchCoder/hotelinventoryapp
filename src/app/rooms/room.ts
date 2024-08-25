export interface Room{
    totalRoom? : number;
    availableRoom?:number;
    bookedRoom?:number;
}

export interface RoomList{
    roomNumber:number;
    roomType:string;
    amenities:string;
    checkInTime:Date;
    checkOutTime:Date;
    price:number;
    photo:string;
    rating:number;
}