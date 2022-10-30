import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Container } from './App.styled';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleFormSubmit = query => {
    setSearchQuery(query);
  };

  return (
    <Container>
      <ToastContainer />
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery searchQuery={searchQuery}></ImageGallery>
    </Container>
  );
};
