import * as React from 'react';
import Col from 'reactstrap/lib/Col';
import Row from 'reactstrap/lib/Row';
import styled from 'styled-components';
import {airlineToImgSrc} from '../utils/airlineImages';
import {HeaderWithDescription} from './HeaderWithDescription';

export default class BookingBox extends React.PureComponent<BookingBoxProps> {
    render() {
        const {
            bookingNumber, departureAirport, arrivalAirport,
            departureDateTime, airlineCode, price
        } = this.props;
        const formattedDate = new Date(departureDateTime).toLocaleString();

        return (
            <BookingWrapper>
                <Row>
                    <Col xs={6} className='d-flex'>
                        <LogoWrapper>
                            <Logo src={airlineToImgSrc(airlineCode)} alt={airlineCode}/>
                        </LogoWrapper>
                        <div>
                            <HeaderWithDescription
                                heading={`${departureAirport} - ${arrivalAirport}`}
                                description={formattedDate}/>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <HeaderWithDescription
                            heading={bookingNumber}
                            description='booking no.'/>
                    </Col>
                    <Col xs={3}>
                        <PriceWrapper>
                            <span className='text-right'>
                                <Price>${price}</Price>
                                <CloseBtn>×</CloseBtn>
                            </span>
                        </PriceWrapper>
                    </Col>
                </Row>
            </BookingWrapper>
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

const BookingWrapper = styled.a.attrs({
    className: 'd-block border border-secondary rounded my-3 py-2 px-3',
    href: '#'
})`
  border-color: rgb(204, 204, 204) !important;
  cursor: pointer;
  color: #212529;

  &:hover, &:active {
    color: #212529;
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.31) 0 0 5px 0;
  }
`;

const LogoWrapper = styled.div.attrs({
    className: 'd-flex mr-1'
})`
  max-width: 40px;
`;

const Logo = styled.img.attrs({
    className: 'align-self-center d-block'
})`
  max-width: 40px;
  max-height: 40px;
`;

const PriceWrapper = styled.div.attrs({
    className: 'h-100 d-flex flex-column justify-content-center'
})`
  flex: 1;
`;

const Price = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
`;

const CloseBtn = styled.span.attrs({
    className: 'close text-danger ml-2'
})`
  opacity: 1;
`;
