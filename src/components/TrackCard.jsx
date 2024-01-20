import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { addToPlayerAction } from '../redux/actions';
import { useDispatch } from 'react-redux';

const TrackCard = () => {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.tracks);

  const trackListData = tracks.tracks.tracks;

  if (!tracks) {
    return <div>Loading...</div>;
  }

  const handleClick = (track, index) => {
    dispatch(addToPlayerAction(track, index));
  };

  return (
    <div className='text-center'>
      {tracks &&
        trackListData?.data.map((track, index) => {
          if (index === 0) {
            return (
              <>
                <img
                  src={track.album.cover_big}
                  height='200px'
                  width='200px'
                  alt='Album image'
                />
                <h2>{track.album.title}</h2>
                <Button
                  className='btn-success rounded-5 fw-bold fs-3 px-5'
                  onClick={() => handleClick(track, index)}
                >
                  Play
                </Button>
              </>
            );
          }
        })}
    </div>
  );
};

export default TrackCard;
