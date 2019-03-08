### Initial booking data

[Return to tutorial steps list](../README.md)


In this step we're going to use bookings data array instead of 2 hardcoded ones.


1. Create a `Booking` type in `src/types/Bookings.ts`:

        export interface Booking {
            bookingNumber: string;
            departureAirport: string;
            arrivalAirport: string;
            departureDateTime: string;
            arrivalDateTime: string;
            airlineCode: string;
            price: number;
            flightNumber: string;
            aircraft: string;
        }
1. Create a file with initial data (`src/data/initialBookings.ts`):

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
1. Use initial data in components
    * Parametrize `BookingPage` with bookings array:

            import {Booking} from '../types/Booking';
            
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
    * Pass bookings array to `BookingsPage` in `Root`:

            import {initialBookings} from '../data/initialBookings';
            
            export const Root = () => (
                <>
                    <Header/>
                    <BookingsPage bookings={initialBookings}/>
                </>
            );
1. Add new bookings or customize existing ones.

Next step: [Removing bookings](4_REMOVING_BOOKINGS.md)