import * as React from 'react';
import Container from 'reactstrap/lib/Container';
import {Booking} from '../types/Booking';
import {SortType} from '../types/SortType';
import BookingBox from './BookingBox';
import SearchPanel from './SearchPanel';

export default class BookingsPage extends React.PureComponent<BookingsPageProps> {
    render() {
        const {bookings, removeBooking, currentSorting, setSorting, searchValue, setSearchValue} = this.props;
        const filteredBookings = filterAndSort(bookings, searchValue, currentSorting);
        return (
            <Container className='pt-4'>
                <SearchPanel searchValue={searchValue}
                             setSearchValue={setSearchValue}
                             currentSorting={currentSorting}
                             setSorting={setSorting}/>
                {filteredBookings.map(booking =>
                    <BookingBox key={booking.bookingNumber}
                                bookingNumber={booking.bookingNumber}
                                departureAirport={booking.departureAirport}
                                arrivalAirport={booking.arrivalAirport}
                                departureDateTime={booking.departureDateTime}
                                airlineCode={booking.airlineCode}
                                price={booking.price}
                                removeBooking={() => removeBooking(booking)}/>)}
            </Container>
        )
    }
}

interface BookingsPageProps {
    bookings: Booking[];
    removeBooking: (booking: Booking) => void;
    currentSorting: SortType;
    setSorting: (newSorting: SortType) => void;
    searchValue: string;
    setSearchValue: (newSearchValue: string) => void;
}

const filterAndSort = (bookings: Booking[], searchValue: string, currentSorting: SortType) =>
    filter(bookings, searchValue)
        .sort(comparators[currentSorting]);

const filter = (bookings: Booking[], searchValue: string): Booking[] =>
    searchValue !== ''
        ? bookings.filter(booking => {
            const lowerCasedSearch = searchValue.toLowerCase().trim();
            return booking.airlineCode.toLowerCase().includes(lowerCasedSearch) ||
                booking.departureAirport.toLowerCase().includes(lowerCasedSearch) ||
                booking.arrivalAirport.toLowerCase().includes(lowerCasedSearch) ||
                booking.bookingNumber.toLowerCase().includes(lowerCasedSearch)
        })
        : bookings.slice();

const comparators = {
    [SortType.BY_AIRLINE_CODE]: (a: Booking, b: Booking) => a.airlineCode.localeCompare(b.airlineCode),
    [SortType.BY_DEPARTURE_DATE]: (a: Booking, b: Booking) => a.departureDateTime.localeCompare(b.departureDateTime),
    [SortType.BY_PRICE]: (a: Booking, b: Booking) => a.price > b.price ? 1 : -1
};
