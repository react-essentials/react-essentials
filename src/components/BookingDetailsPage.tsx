import * as moment from 'moment';
import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import Container from 'reactstrap/lib/Container';
import styled from 'styled-components';
import {Booking} from '../types/Booking';
import {airlineToImgSrc} from '../utils/airlineImages';
import {HeaderWithDescription} from './HeaderWithDescription';

export default class BookingDetailsPage extends React.PureComponent<BookingDetailsProps> {
    render() {
        const {match, bookings} = this.props;
        const booking: Booking = bookings
            .filter(booking => booking.bookingNumber === match.params.bookingNumber)[0];
        return (
            <BorderedContainer className='border border-secondary rounded my-5 px-4 pt-4 pb-5'>
                {booking
                    ? <BookingDetailsBody booking={booking}/>
                    : <h3>Booking not found</h3>}
            </BorderedContainer>
        )
    }
}

interface BookingDetailsProps extends RouteComponentProps<{ bookingNumber: string; }> {
    bookings: Booking[];
}

const BookingDetailsBody = ({booking}: { booking: Booking }) => {
    const departureMoment = moment(booking.departureDateTime);
    const arrivalMoment = moment(booking.arrivalDateTime);
    return (
        <>
            <div className='d-flex pb-5'>
                <h3 className='mr-auto mb-0'>Booking #{booking.bookingNumber}</h3>
                <Price>${booking.price}</Price>
            </div>
            <div className='d-flex'>
                <div className='d-flex mr-auto'>
                    <AirlineImg airlineCode={booking.airlineCode}/>
                    <div>
                        <HeaderWithDescription
                            heading={`${booking.airlineCode} ${booking.flightNumber}`}
                            description={booking.aircraft}/>
                    </div>
                </div>
                <DepartureArrival>
                    <div>
                        <HeaderWithDescription
                            heading={`${booking.departureAirport} ${departureMoment.format('hh:mm A')}`}
                            description={departureMoment.format('D MMM')}/>
                    </div>
                    <div className='mx-5'>
                        <Arrow>→</Arrow>
                    </div>
                    <div>
                        <HeaderWithDescription
                            heading={`${booking.arrivalAirport} ${arrivalMoment.format('hh:mm A')}`}
                            description={arrivalMoment.format('D MMM')}/>
                    </div>
                </DepartureArrival>
            </div>
        </>
    );
};

const BorderedContainer = styled(Container)`
  border-color: rgb(204, 204, 204) !important;
`;

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`;

const AirlineImg = styled<React.HTMLAttributes<HTMLDivElement> & { airlineCode: string }, 'div'>('div').attrs({
    className: 'mr-3 align-self-center rounded-circle border'
})`
  width: 45px;
  height: 45px;
  background-color: #F7F7F7;
  background-image: url(${props => airlineToImgSrc(props.airlineCode)});
  background-repeat: no-repeat;
  background-position: center;
`;

const DepartureArrival = styled.div.attrs({
    className: 'd-flex'
})`
  flex-grow: 0.3;
`;

const Arrow = styled.span`
  font-size: 2rem;
  line-height: 2.5rem;
`;
