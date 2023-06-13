import PropTypes from 'prop-types'
import {StyledSearchWrapper, StyledSearchLabel, StyledSearchInput} from './Search.Styled'
import { Controller, useForm, useWatch } from 'react-hook-form';
export const Search = ({filter, handleFilterChange}) => {
  const {control} = useForm();
  const searchValue = useWatch({
    control,
    name: 'search',
    defaultValue: '',
  });

return (
<StyledSearchWrapper>
      <StyledSearchLabel htmlFor="search">Find contacts by name</StyledSearchLabel>
      <Controller control={control}
        name='search'
        value={searchValue}
        render={({ field }) => (
      <StyledSearchInput
        type="text"
        value={field.value}
        onChange={handleFilterChange}/>
      )} />
    </StyledSearchWrapper>)} 


Search.propTypes = {
      filter: PropTypes.string,
      handleFilterChange: PropTypes.func,
}