### Simple booking component

[Return to tutorial steps list](../README.md)


The goal of this step is to create a page for bookings list and show data (without any styling).

1. Create util function to build airline image urls (`src/utils/airlineImages.ts`):

        export const airlineToImgSrc = (airlineCode: string) =>
            `https://d1xzms9o977hvd.cloudfront.net/widgets/static/airlineLogos/${airlineCode}.PNG`;

1. Create `src/components/BookingBox.tsx` to show data using this component:

        import * as React from 'react';
        import {airlineToImgSrc} from '../utils/airlineImages';
        
        export default class BookingBox extends React.PureComponent<BookingBoxProps> {
            render() {
                const {
                    bookingNumber, departureAirport, arrivalAirport,
                    departureDateTime, airlineCode, price
                } = this.props;
                const formattedDate = new Date(departureDateTime).toLocaleString();
        
                return (
                    <div>
                        <img src={airlineToImgSrc(airlineCode)} alt={airlineCode}/>
                        <span> #{bookingNumber}</span>
                        <span> {departureAirport} -> {arrivalAirport}</span>
                        <span> {formattedDate}</span>
                        <span> ${price}</span>
                    </div>
                )
            }
        }
        
        interface BookingBoxProps {
            bookingNumber: string;
            departureAirport: string;
            arrivalAirport: string;
            departureDateTime: string;
            airlineCode: string;
            price: number;
        }

1. Create `src/components/BookingsPage.tsx` to keep booking components list (currently 2 hardcoded):

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

1. Remove old hello-world code from `Root.tsx` and put `BookingsPage`:

        import * as React from 'react';
        import BookingsPage from './BookingsPage';
        
        export const Root = () => (
            <BookingsPage/>
        );

1. Play with these props or add new reservations.

Next step: [Let’s style it!](2_LETS_STYLE_IT.md)
