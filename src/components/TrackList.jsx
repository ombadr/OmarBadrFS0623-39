import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const TrackList = () => {
  // const tracks = data.tracks.tracks.data;
  // console.log('Tracks', tracks);

  const tracks = useSelector((state) => state.tracks);

  if (!tracks) {
    return <div>Loading...</div>;
  }

  const trackListData = tracks.tracks.tracks;
  console.log('Tracklist data', trackListData);

  console.log('track list', tracks);

  return (
    <Container>
      <Row>
        {tracks &&
          trackListData?.data.map((track, index) => {
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
