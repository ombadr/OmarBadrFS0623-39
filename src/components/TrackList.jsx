import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TrackList = ({ data }) => {
  const tracks = data.tracks.tracks.data;
  console.log('Tracks', tracks);
  return (
    <Container>
      <Row>
        {tracks &&
          tracks.map((track, index) => {
            return (
              <Col lg={12} key={index}>
                <div className='d-flex'>
                  <p className='flex-grow-1 col-10 fs-5'>{track.title}</p>
                  <p className='flex-grow-1 col-2 fs-5'>{track.duration}</p>
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default TrackList;
