import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import MySidebar from './components/MySidebar';
import MyTopbar from './components/MyTopbar';
import Player from './components/Player';
import HomepageAlbums from './components/HomepageAlbums';
import TrackListPage from './components/TrackListPage';

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <Col lg={2} className='p-0' >
            <MySidebar />
          </Col>
          <Col lg={10} className='p-0' style={{ backgroundColor: '#1E2636' }}>
            <MyTopbar />
            <Routes>
              <Route path='/' element={<HomepageAlbums />} />
              <Route path='/album/:id' element={<TrackListPage />} />
            </Routes>
          </Col>
          <Player />
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
