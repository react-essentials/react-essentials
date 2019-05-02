import * as React from 'react';
import {initialBookings} from '../data/initialBookings';
import BookingsPage from './BookingsPage';
import Header from './Header';

export const Root = () => (
    <>
        <Header/>
        <BookingsPage bookings={initialBookings}/>
    </>
);
