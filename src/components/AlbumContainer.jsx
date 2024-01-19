import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AlbumCard from './AlbumCard';
import { useSelector } from 'react-redux';

const AlbumContainer = () => {
  const albums = useSelector((state) => state.albums);
  console.log(albums);

  return (
    <Container className='text-light mt-5'>
      <h1>{title}</h1>
      <Row className='mt-4'>
        {albums &&
          albums.map((album, index) => (
            <Col key={index} lg={3}>
              <AlbumCard data={album} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default AlbumContainer;
