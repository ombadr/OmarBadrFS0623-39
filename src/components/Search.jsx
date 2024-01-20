import { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchStatusAction,
  getAlbumsFromSearchAction,
} from '../redux/actions';

const Search = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const albums = useSelector((state) => state.searchAlbums);
  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      return;
    }

    dispatch(getAlbumsFromSearchAction(searchQuery));
    dispatch(setSearchStatusAction(true));

    setSearchQuery('');
  };

  return (
    <InputGroup className='mb-3 p-4'>
      <FormControl
        placeholder='Search'
        aria-label='Search'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button variant='outline-secondary' onClick={handleSearch}>
        GO
      </Button>
    </InputGroup>
  );
};

export default Search;
