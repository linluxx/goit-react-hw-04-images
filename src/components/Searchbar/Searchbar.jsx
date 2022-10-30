import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiSearch2Line } from 'react-icons/ri';
import PropTypes from 'prop-types';
import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  Header,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearchChange = evt => {
    setSearchQuery(evt.currentTarget.value.toLowerCase());
  };

  const onFormSubmit = evt => {
    evt.preventDefault();
    if (searchQuery.trim() === '') {
      return toast.error('Fill the search field!', {
        position: 'top-center',
        autoClose: 3000,
      });
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <Header>
      <SearchForm onSubmit={onFormSubmit}>
        <SearchFormButton type="submit">
          <RiSearch2Line />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={onSearchChange}
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
