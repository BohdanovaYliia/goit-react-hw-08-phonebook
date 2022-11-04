import { useDispatch, useSelector } from "react-redux";
import { filterContacts, getFilter } from "redux/contactsSlice";
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    return (
        <FilterLabel>
            Find contacts by name
            <FilterInput type='text' value={filter} onChange={evt => dispatch(filterContacts(evt.target.value))} />
        </FilterLabel>
    );
};