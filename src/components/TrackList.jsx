import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TrackList = () => {
  return (
    <Container>
      <Row>
        <Col lg={12}>
          <div className='d-flex'>
            <p className='flex-grow-1 col-10 fs-5'>
              Break on Through (To the Other Side)
            </p>
            <p className='flex-grow-1 col-2 fs-5'>1:00</p>
          </div>
        </Col>
        <Col lg={12}>
          <div className='d-flex'>
            <p className='flex-grow-1 col-10 fs-5'>
              Break on Through (To the Other Side)
            </p>
            <p className='flex-grow-1 col-2 fs-5'>1:00</p>
          </div>
        </Col>
        <Col lg={12}>
          <div className='d-flex'>
            <p className='flex-grow-1 col-10 fs-5'>
              Break on Through (To the Other Side)
            </p>
            <p className='flex-grow-1 col-2 fs-5'>1:00</p>
          </div>
        </Col>
        <Col lg={12}>
          <div className='d-flex'>
            <p className='flex-grow-1 col-10 fs-5'>
              Break on Through (To the Other Side)
            </p>
            <p className='flex-grow-1 col-2 fs-5'>1:00</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TrackList;
