import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AlbumCard from './AlbumCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTracksAction } from '../redux/actions';

const SearchAlbums = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.searchAlbums);
  if (!albums.searchAlbums || !albums.searchAlbums.search) {
    return null;
  }

  const handleClick = () => {
    dispatch(getTracksAction(albums.searchAlbums.search[0].album.id));
  };

  return (
    <div className='text-light' style={{ marginBottom: '100px' }}>
      <h1>Search results</h1>
      <Container>
        <Row>
          {albums.searchAlbums.search.map((result, index) => {
            return (
              <Col lg={4} key={index} onClick={handleClick}>
                <Link
                  to={`/album/${result.album.id}`}
                  className='text-decoration-none text-light'
                >
                  <AlbumCard data={result} />
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default SearchAlbums;
