import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addToPlayerAction } from '../redux/actions';

const TrackList = () => {
  // const tracks = data.tracks.tracks.data;
  // console.log('Tracks', tracks);

  const tracks = useSelector((state) => state.tracks);
  const playerData = useSelector((state) => state.player);
  const dispatch = useDispatch();

  if (!tracks) {
    return <div>Loading...</div>;
  }

  const trackListData = tracks.tracks.tracks;
  console.log('Tracklist data', trackListData);

  console.log('track list', tracks);

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleClick = (track, index) => {
    dispatch(addToPlayerAction(track, index));
  };

  console.log('Player data: ', playerData);

  return (
    <Container>
      <Row>
        {tracks &&
          trackListData?.data.map((track, index) => {
            return (
              <Col lg={12} key={index}>
                <div
                  className='d-flex'
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleClick(track, index)}
                >
                  <p className='flex-grow-1 col-10 fs-5'>{track.title}</p>
                  <p className='flex-grow-1 col-2 fs-5'>
                    {formatDuration(track.duration)}
                  </p>
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default TrackList;
