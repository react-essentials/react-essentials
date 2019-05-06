import * as React from 'react';
import {initialBookings} from '../data/initialBookings';
import {Booking} from '../types/Booking';
import BookingsPage from './BookingsPage';
import Header from './Header';

export class Root extends React.PureComponent<{}, RootState> {
    state = {bookings: initialBookings};

    private readonly removeBooking = (bookingToRemove: Booking) => {
        const {bookings} = this.state;
        const newBookings = bookings.filter(booking => booking !== bookingToRemove);
        this.setState({bookings: newBookings});
    };

    render() {
        return (
            <>
                <Header/>
                <BookingsPage bookings={this.state.bookings}
                              removeBooking={this.removeBooking}/>
            </>
        );
    }
}

interface RootState {
    bookings: Booking[];
}
