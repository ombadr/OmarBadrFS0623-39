import React from 'react';

const AlbumCard = ({ data }) => {
  return (
    <div className='text-center'>
      <img
        src={data.album.cover_big}
        height='200px'
        width='200px'
        alt='Album image'
      />
      <p className='text-center text-truncate px-5 m-0 my-2'>
        Album: <span>{data.album.title}</span>
      </p>
      <p className='text-center'>
        Artist: <span>{data.artist.name}</span>
      </p>
    </div>
  );
};

export default AlbumCard;
