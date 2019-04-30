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
