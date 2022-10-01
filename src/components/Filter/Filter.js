import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ( { value, filterChange } ) => {

    return (
        <FilterLabel>
            Find contacts by name
            <FilterInput type='text' value={value} onChange={filterChange} />
        </FilterLabel>
    );

};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    filterChange: PropTypes.func.isRequired,
};