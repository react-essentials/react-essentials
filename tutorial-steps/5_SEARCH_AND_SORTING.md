### Search and sorting

[Return to tutorial steps list](../README.md)

1. Create an enum for sorting types (`src/types/SortType.ts`):

        export enum SortType {
            BY_DEPARTURE_DATE,
            BY_AIRLINE_CODE,
            BY_PRICE
        }

1. Keep state and mutating functions in `Root`:

        export class Root extends React.PureComponent<{}, RootState> {
            state = {
                bookings: initialBookings,
                currentSorting: SortType.BY_DEPARTURE_DATE,
                searchValue: ''
            };
        
            // other functions
        
            private readonly setSorting = (newSorting: SortType) => {
                this.setState({currentSorting: newSorting});
            };
        
            private readonly setSearchValue = (newSearchValue: string) => {
                this.setState({searchValue: newSearchValue});
            };
        
            render() {
                const {bookings, currentSorting, searchValue} = this.state;
                return (
                    <>
                        <Header/>
                        <BookingsPage bookings={bookings}
                                      removeBooking={this.removeBooking}
                                      currentSorting={currentSorting}
                                      setSorting={this.setSorting}
                                      searchValue={searchValue}
                                      setSearchValue={this.setSearchValue}/>
                    </>
                );
            }
        }
        
        interface RootState {
            bookings: Booking[];
            currentSorting: SortType;
            searchValue: string;
        }

1. Add sorting and filtering logic and place search panel component (it will be created in the next step)

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
                            <BookingBox /* props*/ />)}
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

1. Create `src/components/SearchPanel.tsx`

        import * as React from 'react';
        import {Form, FormGroup, Input, Label} from 'reactstrap';
        import {SortType} from '../types/SortType';
        
        export default class SearchPanel extends React.PureComponent<SearchPanelProps> {
            render() {
                const {searchValue, setSearchValue, currentSorting, setSorting} = this.props;
        
                const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchValue(event.target.value);
                };
                const onSortingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                    setSorting(Number(event.target.value) as SortType);
                };
        
                return (
                    <Form onSubmit={(e: React.FormEvent) => e.preventDefault()} inline>
                        <FormGroup className="mr-auto">
                            <Label for="searchValue" className="sr-only">Find bookings</Label>
                            <Input id="searchValue"
                                   name="searchValue"
                                   placeholder="Find bookings..."
                                   onChange={onValueChange}
                                   value={searchValue}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="sortingSelect" className="sr-only">Sorting type</Label>
                            <Input type="select"
                                   id="sortingSelect"
                                   name="sortingSelect"
                                   onChange={onSortingChange}
                                   value={currentSorting}>
                                <option value={SortType.BY_PRICE}>Sort by price</option>
                                <option value={SortType.BY_DEPARTURE_DATE}>Sort by departure date</option>
                                <option value={SortType.BY_AIRLINE_CODE}>Sort by airline code</option>
                            </Input>
                        </FormGroup>
                    </Form>
                )
            }
        }
        
        
        interface SearchPanelProps {
            searchValue: string
            setSearchValue: (newValue: string) => void;
            currentSorting: SortType;
            setSorting: (newSorting: SortType) => void;
        }

Next step: [Adding new booking to list](6_ADDING_NEW_BOOKING_TO_LIST.md) 