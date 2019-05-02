import * as React from 'react';
import Container from 'reactstrap/lib/Container';
import BookingBox from './BookingBox';

export default class BookingsPage extends React.PureComponent {
    render() {
        return (
            <Container className='pt-4'>
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
            </Container>
        )
    }
}
