import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {initialBookings} from '../data/initialBookings';
import {Booking} from '../types/Booking';
import {SortType} from '../types/SortType';
import BookingDetailsPage from './BookingDetailsPage';
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

    private readonly addBooking = (bookingToAdd: Booking) => {
        const {bookings} = this.state;
        const bookingsLeft: Booking[] =
            bookings.filter(booking => booking.bookingNumber !== bookingToAdd.bookingNumber);
        this.setState({bookings: [...bookingsLeft, bookingToAdd]});
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
            <Router>
                <Header/>
                <Switch>
                    <Route exact path='/'
                           render={() => <BookingsPage bookings={bookings}
                                                       addBooking={this.addBooking}
                                                       removeBooking={this.removeBooking}
                                                       currentSorting={currentSorting}
                                                       setSorting={this.setSorting}
                                                       searchValue={searchValue}
                                                       setSearchValue={this.setSearchValue}/>}/>
                    <Route path="/booking/:bookingNumber"
                           render={props => <BookingDetailsPage bookings={bookings}
                                                                {...props}/>}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </Router>
        );
    }
}

const NotFoundPage = () => (<h1 className='text-center mt-5'>404 not found</h1>);

interface RootState {
    bookings: Booking[];
    currentSorting: SortType;
    searchValue: string;
}
