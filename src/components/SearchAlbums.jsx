import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import AlbumCard from './AlbumCard';

const SearchAlbums = () => {
  const albums = useSelector((state) => state.searchAlbums);
  if (!albums.searchAlbums || !albums.searchAlbums.search) {
    return null;
  }
  console.log(albums.searchAlbums.search);
  return (
    <div className='text-light' style={{ marginBottom: '100px' }}>
      <h1>Search results</h1>
      <Container>
        <Row>
          {albums.searchAlbums.search.map((result) => {
            return (
              <Col lg={4}>
                <AlbumCard data={result} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default SearchAlbums;
