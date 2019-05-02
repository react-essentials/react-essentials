import * as React from 'react';
import Container from 'reactstrap/lib/Container';
import {Booking} from '../types/Booking';
import BookingBox from './BookingBox';

export default class BookingsPage extends React.PureComponent<BookingsPageProps> {
    render() {
        const {bookings} = this.props;
        return (
            <Container className='pt-4'>
                {bookings.map(booking =>
                    <BookingBox key={booking.bookingNumber}
                                bookingNumber={booking.bookingNumber}
                                departureAirport={booking.departureAirport}
                                arrivalAirport={booking.arrivalAirport}
                                departureDateTime={booking.departureDateTime}
                                airlineCode={booking.airlineCode}
                                price={booking.price}/>)}
            </Container>
        )
    }
}

interface BookingsPageProps {
    bookings: Booking[];
}
