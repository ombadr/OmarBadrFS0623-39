import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './MySidebar.css';
import { FaSpotify } from 'react-icons/fa6';
import { IoHomeSharp } from 'react-icons/io5';
import { MdLocalLibrary } from 'react-icons/md';
import Search from './Search';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchStatusAction } from '../redux/actions';

const MySidebar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSearchStatusAction(false));
  };
  return (
    <div className='sticky-sidebar text-light bg-dark '>
      <div className='sidebar-1'>
        <div className='d-flex align-items-center justify-content-center my-4'>
          <FaSpotify className='fs-1 me-3' />
          <h1 className='m-0'>Spotify</h1>
        </div>

        <div
          className='d-flex align-items-center justify-content-start mb-3'
          onClick={handleClick}
        >
          <Link
            className='text-decoration-none d-flex text-light align-items-center'
            to='/'
          >
            <IoHomeSharp className='fs-2 mx-3' />
            <h2 className='m-0'>Home</h2>
          </Link>
        </div>
        <div className='d-flex align-items-center justify-content-start mb.3'>
          <MdLocalLibrary className='fs-2 mx-3' />
          <h2 className='m-0'>Your Library</h2>
        </div>
        <Search />
      </div>
      <div className='sidebar-2 p-4'>
        <Button className='btn-primary mb-4 rounded-5 fw-bold fs-3'>
          Sign Up
        </Button>
        <Button className='btn-secondary rounded-5 fw-bold fs-3'>Login</Button>
      </div>
      <div className='d-flex justify-content-center'>
        <p className='me-3'>Cookie Policy</p>
        <p>Privacy</p>
      </div>
    </div>
  );
};

export default MySidebar;
