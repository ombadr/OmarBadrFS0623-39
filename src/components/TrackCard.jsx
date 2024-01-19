import React from 'react';
import { Button } from 'react-bootstrap';

const TrackCard = () => {
  return (
    <div className='text-center'>
      <img
        src='https://m.media-amazon.com/images/I/61qUq7ijS+L._UF1000,1000_QL80_.jpg'
        height='200px'
        width='200px'
        alt='Album image'
      />
      <h1>The Doors</h1>
      <p>The Doors</p>
      <Button className='btn-success rounded-5 fw-bold fs-3 px-5'>Play</Button>
    </div>
  );
};

export default TrackCard;
