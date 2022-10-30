import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.styled';

export const Button = ({ onLoadMoreClick }) => {
  return (
    <LoadMoreBtn type="button" onClick={onLoadMoreClick}>
      Load more
    </LoadMoreBtn>
  );
};

Button.propTypes = {
  onLoadMoreClick: PropTypes.func,
};
