import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from 'redux/Contacts/contactsSlice';
import { getFilter } from 'redux/Contacts/selectors';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    return (
        <FilterLabel>
            Find contacts by name
            <FilterInput type='text' value={filter} onChange={evt => dispatch(updateFilter(evt.currentTarget.value))} />
        </FilterLabel>
    );
};