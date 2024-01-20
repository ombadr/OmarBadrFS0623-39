import React from 'react';
import './Player.css';
import { Container, Row, Col } from 'react-bootstrap';
import { MdOutlineReplay } from 'react-icons/md';
import { IoPlayBackSharp } from 'react-icons/io5';
import { IoPlayForwardSharp } from 'react-icons/io5';
import { IoPlaySharp } from 'react-icons/io5';
import { AiFillSound } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { addFavoriteAction, removeFavoriteAction } from '../redux/actions';
import { useDispatch } from 'react-redux';

const Player = () => {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.player);
  const favorites = useSelector((state) => state.favorites.content);
  const currentTrack = player.player[0];
  console.log('From player: ', player);
  const image = player.player[0]?.track.album.cover_big;
  const title = player.player[0]?.track.title;

  console.log('image', image);

  const isFavorite = favorites.some(
    (item) => item.track.id === currentTrack?.track.id
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavoriteAction(currentTrack));
    } else {
      dispatch(addFavoriteAction(currentTrack));
    }
  };

  console.log('isFavorite', isFavorite);

  return (
    <Container fluid className='player-bg text-light p-0 m-0 fixed-bottom'>
      {image ? (
        <Row>
          <Col lg={1}>
            <div className='d-flex align-items-center'>
              <img src={image} height='100px' width='100px' alt='Album image' />
              <p className='m-0 ms-5 fw-bold fs-4'>{title}</p>
            </div>
          </Col>
          <Col lg={8} className='align-self-center'>
            <div className='d-flex justify-content-center'>
              <MdOutlineReplay className='fs-4 me-5' />
              <div className='d-flex flex-column'>
                <div className='d-flex mb-4'>
                  <IoPlayBackSharp className='mx-5 fs-4' />
                  <IoPlaySharp className='mx-5 fs-4' />
                  <IoPlayForwardSharp className='mx-5 fs-4' />
                </div>
                <div className='progress'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='0'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
              <AiFillSound className='fs-4 ms-5' />
            </div>
          </Col>
          <Col lg={1} className='align-self-center'>
            <FaHeart
              className={`fs-3 ${isFavorite ? 'text-success' : 'text-light'}`}
              onClick={() => toggleFavorite()}
            />
          </Col>
        </Row>
      ) : (
        <Row>
          <Col lg={1}>
            <div className='d-flex align-items-center'>
              <img
                src='https://m.media-amazon.com/images/I/61qUq7ijS+L._UF1000,1000_QL80_.jpg'
                height='100px'
                width='100px'
                alt='Album image'
              />
              <p>Album</p>
            </div>
          </Col>
          <Col lg={8} className='align-self-center'>
            <div className='d-flex justify-content-center'>
              <MdOutlineReplay className='fs-4 me-5' />
              <div className='d-flex flex-column'>
                <div className='d-flex mb-4'>
                  <IoPlayBackSharp className='mx-5 fs-4' />
                  <IoPlaySharp className='mx-5 fs-4' />
                  <IoPlayForwardSharp className='mx-5 fs-4' />
                </div>
                <div className='progress'>
                  <div
                    className='progress-bar'
                    role='progressbar'
                    aria-valuenow='0'
                    aria-valuemin='0'
                    aria-valuemax='100'
                  ></div>
                </div>
              </div>
              <AiFillSound className='fs-4 ms-5' />
            </div>
          </Col>
          <Col lg={1} className='align-self-center'>
            <FaHeart className='fs-3' />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Player;
