### Adding new booking to list

[Return to tutorial steps list](../README.md)

1. Add moment.js library:

    * `npm install –save moment`
    
1. Create a function to add a new booking to `Root` state:

        private readonly addBooking = (bookingToAdd: Booking) => {
            this.setState({bookings: [...this.state.bookings, bookingToAdd]});
        };

1. Append `addBooking` function to `BookingsPageProps` and pass it to a new component in `BookingPage` (at the end):
        
        <Container>
            ...
            <NewBookingForm addBooking={addBooking}/>
        </Container>
        
1. Create `src/components/NewBookingForm.tsx`

        import * as React from 'react';
        import {Form, FormGroup, Input, Label} from 'reactstrap';
        import Button from 'reactstrap/lib/Button';
        import Col from 'reactstrap/lib/Col';
        import {InputType} from 'reactstrap/lib/Input';
        import Row from 'reactstrap/lib/Row';
        import {Booking} from '../types/Booking';
        import * as moment from 'moment';
        
        export default class NewBookingForm extends React.PureComponent<NewBookingFormProps, Booking> {
            state = initialBooking;
        
            onSubmit = (e: React.FormEvent) => {
                e.preventDefault();
                const {departureDateTime, arrivalDateTime} = this.state;
                this.props.addBooking({
                    ...this.state,
                    departureDateTime: moment(departureDateTime, 'HH:mm').format(),
                    arrivalDateTime: moment(arrivalDateTime, 'HH:mm').format()
                });
                this.setState(initialBooking);
            };
        
            render() {
                return (
                    <Form onSubmit={this.onSubmit} className='py-5'>
                        <h4>Add new booking</h4>
                        <Row>
                            <Col>
                                <NewBookingInput name='bookingNumber'
                                                 placeholder='Booking number'
                                                 value={this.state.bookingNumber}
                                                 onChange={e => this.setState({bookingNumber: e.target.value})}/>
                                <NewBookingInput name='departureAirport'
                                                 placeholder='Departure airport'
                                                 value={this.state.departureAirport}
                                                 onChange={e => this.setState({departureAirport: e.target.value})}/>
                                <NewBookingInput name='arrivalAirport'
                                                 placeholder='Arrival airport'
                                                 value={this.state.arrivalAirport}
                                                 onChange={e => this.setState({arrivalAirport: e.target.value})}/>
                            </Col>
                            <Col>
                                <NewBookingInput name='airlineCode'
                                                 placeholder='Airline code'
                                                 value={this.state.airlineCode}
                                                 onChange={e => this.setState({airlineCode: e.target.value})}/>
                                <NewBookingInput name='flightNumber'
                                                 placeholder='Flight number'
                                                 value={this.state.flightNumber}
                                                 onChange={e => this.setState({flightNumber: e.target.value})}/>
                                <NewBookingInput name='aircraft'
                                                 placeholder='Aircraft'
                                                 value={this.state.aircraft}
                                                 onChange={e => this.setState({aircraft: e.target.value})}/>
                            </Col>
                            <Col>
                                <NewBookingInput name='price'
                                                 placeholder='Price'
                                                 value={this.state.price}
                                                 onChange={e => this.setState({price: Number(e.target.value)})}
                                                 type='number'/>
                                <NewBookingInput name='departureDateTime'
                                                 placeholder='Departure time'
                                                 value={this.state.departureDateTime}
                                                 onChange={e => this.setState({departureDateTime: e.target.value})}
                                                 type='time'/>
                                <NewBookingInput name='arrivalDateTime'
                                                 placeholder='Arrival time'
                                                 value={this.state.arrivalDateTime}
                                                 onChange={e => this.setState({arrivalDateTime: e.target.value})}
                                                 type='time'/>
                            </Col>
                        </Row>
                        <Button color="primary">Submit</Button>
                    </Form>
                )
            }
        }
        
        const NewBookingInput = (props: {
            name: string; placeholder: string; value: string | number; type?: InputType;
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
        }) => (
            <FormGroup className="mr-auto">
                <Label for={props.name}>{props.placeholder}</Label>
                <Input id={props.name}
                       name={props.name}
                       type={props.type}
                       placeholder={props.placeholder}
                       onChange={props.onChange}
                       value={props.value}/>
            </FormGroup>
        );
        
        interface NewBookingFormProps {
            addBooking: (booking: Booking) => void;
        }
        
        const initialBooking: Booking = {
            bookingNumber: '902357',
            departureAirport: 'DFW',
            arrivalAirport: 'EWR',
            departureDateTime: '11:00',
            arrivalDateTime: '15:30',
            airlineCode: 'UA',
            price: 287.43,
            flightNumber: '5761',
            aircraft: 'BOEING 787'
        };

Next step: [Routing](7_ROUTING.md)