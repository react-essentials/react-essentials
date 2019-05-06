import * as React from 'react';
import {initialBookings} from '../data/initialBookings';
import {Booking} from '../types/Booking';
import {SortType} from '../types/SortType';
import BookingsPage from './BookingsPage';
import Header from './Header';

export class Root extends React.PureComponent<{}, RootState> {
    state = {
        bookings: initialBookings,
        currentSorting: SortType.BY_DEPARTURE_DATE,
        searchValue: ''
    };

    private readonly removeBooking = (bookingToRemove: Booking) => {
        const {bookings} = this.state;
        const newBookings = bookings.filter(booking => booking !== bookingToRemove);
        this.setState({bookings: newBookings});
    };

    private readonly setSorting = (newSorting: SortType) => {
        this.setState({currentSorting: newSorting});
    };

    private readonly setSearchValue = (newSearchValue: string) => {
        this.setState({searchValue: newSearchValue});
    };

    render() {
        const {bookings, currentSorting, searchValue} = this.state;
        return (
            <>
                <Header/>
                <BookingsPage bookings={bookings}
                              removeBooking={this.removeBooking}
                              currentSorting={currentSorting}
                              setSorting={this.setSorting}
                              searchValue={searchValue}
                              setSearchValue={this.setSearchValue}/>
            </>
        );
    }
}

interface RootState {
    bookings: Booking[];
    currentSorting: SortType;
    searchValue: string;
}
