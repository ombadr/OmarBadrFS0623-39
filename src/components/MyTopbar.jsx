import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MyTopbar = () => {
  return (
    <Container className='text-light mt-3'>
      <Row>
        <Col>
          <h3 className='p-2 fs-5'>TRENDING</h3>
        </Col>
        <Col>
          <h3 className='p-2 fs-5'>PODCAST</h3>
        </Col>
        <Col>
          <h3 className='p-2 fs-5'>MOODS AND GENRES</h3>
        </Col>
        <Col>
          <h3 className='p-2 fs-5'>NEW RELEASES</h3>
        </Col>
        <Col>
          <h3 className='p-2 fs-5'>DISCOVER</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default MyTopbar;
