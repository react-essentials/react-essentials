import * as React from 'react';
import BookingBox from './BookingBox';

export default class BookingsPage extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>Your bookings</h1>
                <BookingBox bookingNumber='123456'
                            departureAirport='LAS'
                            arrivalAirport='LAX'
                            departureDateTime='2019-07-12T09:00'
                            airlineCode='AA'
                            price={95.25}/>
                <BookingBox bookingNumber='654321'
                            departureAirport='DUS'
                            arrivalAirport='PMI'
                            departureDateTime='2019-08-16T17:00'
                            airlineCode='LH'
                            price={160.99}/>
            </div>
        )
    }
}
