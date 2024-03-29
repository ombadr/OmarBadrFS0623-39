import { useEffect } from 'react';
import TrackList from './TrackList';
import TrackCard from './TrackCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTracksAction } from '../redux/actions';

const TrackListPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const trackList = useSelector((state) => state.tracks);

  useEffect(() => {
    dispatch(getTracksAction(id));
  }, [id, dispatch]);

  return (
    <Container
      className='text-light mt-5 p-5'
      style={{ marginBottom: '100px' }}
    >
      <Row>
        <Col lg={4}>
          <TrackCard />
        </Col>
        <Col lg={8}>
          <TrackList />
        </Col>
      </Row>
    </Container>
  );
};

export default TrackListPage;
