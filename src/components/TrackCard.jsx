import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const TrackCard = () => {
  const tracks = useSelector((state) => state.tracks.tracks);
  console.log('Track card', tracks);

  if (!tracks) {
    return <div>Loading...</div>;
  }

  return (
    <div className='text-center'>
      <img
        src={tracks.cover_big}
        height='200px'
        width='200px'
        alt='Album image'
      />
      <h2>{tracks.title}</h2>
      {/* <p className='fs-4 fs-bold'>{tracks.artist.name || 'Loading...'}</p> */}
      <Button className='btn-success rounded-5 fw-bold fs-3 px-5'>Play</Button>
    </div>
  );
};

export default TrackCard;
