import {Booking} from '../types/Booking';

export const initialBookings: Booking[] = [{
    bookingNumber: '123456',
    departureAirport: 'LAS',
    arrivalAirport: 'LAX',
    departureDateTime: '2019-07-12T09:00',
    arrivalDateTime: '2019-07-12T10:20',
    airlineCode: 'AA',
    price: 95.35,
    flightNumber: '2530',
    aircraft: 'BOEING 737'
}, {
    bookingNumber: '834976',
    departureAirport: 'DUS',
    arrivalAirport: 'PMI',
    departureDateTime: '2019-08-16T17:00',
    arrivalDateTime: '2019-08-16T18:57',
    airlineCode: 'LH',
    price: 160.99,
    flightNumber: '1079',
    aircraft: 'BOEING 737-700'
}, {
    bookingNumber: '555222',
    departureAirport: 'KRK',
    arrivalAirport: 'WAW',
    departureDateTime: '2019-05-16T05:40',
    arrivalDateTime: '2019-05-16T06:40',
    airlineCode: 'LO',
    price: 64.19,
    flightNumber: '3910',
    aircraft: 'EMBRAER 195'
}];
