### Removing bookings

[Return to tutorial steps list](../README.md)


The goal of this step is to provide a possibility to manage bookings.
We'll start with removing.

1. Use `Root` state to keep bookings list.
It will be passed to downstream components.
Initialize state with `initialBookings` and change array reference on each modification.
Removing is done in immutable way (`filter()` creates a new array instead of modifying existing one - functional approach).
Pass `removeBooking` function to `BookingsPage` (props in `BookingsPage` will be edited in the next step):

        import {Booking} from '../types/Booking';
        
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
1. Add a property in `BookingsPage` and pass `removeBooking` function to `BookingBox`.
Note that function will be bound to a specific booking:

        export default class BookingsPage extends React.PureComponent<BookingsPageProps> {
            render() {
                const {bookings, removeBooking} = this.props;
                return (
                    <Container className='pt-4'>
                        {bookings.map(booking =>
                            <BookingBox /* other props */
                                        removeBooking={() => removeBooking(booking)}/>)}
                    </Container>
                )
            }
        }
        
        interface BookingsPageProps {
            bookings: Booking[];
            removeBooking: (booking: Booking) => void;
        }
1. Use passed function in close button `onClick` event (`BookingBox`)

        export default class BookingBox extends React.PureComponent<BookingBoxProps> {
            render() {
                const {
                    bookingNumber, departureAirport, arrivalAirport,
                    departureDateTime, airlineCode, price, removeBooking
                } = this.props;
                const formattedDate = new Date(departureDateTime).toLocaleString();
                const removeBookingOnClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
                    event.preventDefault();
                    removeBooking();
                };
                /* some code */
                        <CloseBtn onClick={removeBookingOnClick}>×</CloseBtn>
                /* some code*/
        }
        
        interface BookingBoxProps {
            /* other props */
            removeBooking: () => void;
        }
1. Try to remove booking (refresh page to get initial bookings again).

Next step: [Search and sorting](5_SEARCH_AND_SORTING.md)