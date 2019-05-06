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
