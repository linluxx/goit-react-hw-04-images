import { useState, useEffect } from 'react';
import { Button } from 'components/Button/Button';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import { Loader } from 'components/Loader/Loader';
import { getData } from 'Api/AxiosConfig';
import PropTypes from 'prop-types';

export const ImageGallery = ({ searchQuery }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setPage(1);
    setData([]);
    getData(searchQuery, page, showLoader, hideLoader).then(res => {
      setData(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    if (page === 1) {
      return;
    }

    getData(searchQuery, page, showLoader, hideLoader).then(res => {
      setData(prevState => {
        return [...prevState, ...res];
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const onLoadMoreClick = () => {
    setPage(prevState => prevState + 1);
  };

  const showLoader = () => {
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Gallery>
        {data.map(img => {
          return <ImageGalleryItem data={img} key={img.id} />;
        })}
      </Gallery>
      {data.length > 11 && <Button onLoadMoreClick={onLoadMoreClick} />}
    </>
  );
};

ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
};
