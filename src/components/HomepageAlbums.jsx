import { useState, useEffect } from 'react';
import SearchAlbums from './SearchAlbums';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbumsAction } from '../redux/actions';
import AlbumCard from './AlbumCard';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomepageAlbums = () => {
  const { albums } = useSelector((state) => state.albums);
  const dispatch = useDispatch();

  const artists = ['The Doors', '50 cent', 'Coldplay'];

  const [loading, setLoading] = useState(true);
  const [albumsLoaded, setAlbumsLoaded] = useState(false);

  const isSearch = useSelector((state) => state.searchStatus.isSearch);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const fetchAlbumsPromises = artists.map((artist) =>
          dispatch(getAlbumsAction(artist))
        );

        await Promise.all(fetchAlbumsPromises);

        setLoading(false);
        setAlbumsLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div style={{ marginBottom: '100px' }}>
      {!loading && !isSearch && albumsLoaded && (
        <>
          <Container className='text-light mt-5'>
            <h1>Rock Classics</h1>
            <Row className='mt-4'>
              {albums &&
                albums['The Doors'].map((album, index) => (
                  <Col key={index} lg={3}>
                    <Link
                      to={`/album/${album.album.id}`}
                      className='text-decoration-none text-light'
                    >
                      <AlbumCard data={album} />
                    </Link>
                  </Col>
                ))}
            </Row>
          </Container>
          <Container className='text-light mt-5'>
            <h1>Pop Culture</h1>
            <Row className='mt-4'>
              {albums &&
                albums['50 cent'].map((album, index) => (
                  <Col key={index} lg={3}>
                    <Link
                      to={`/album/${album.album.id}`}
                      className='text-decoration-none text-light'
                    >
                      <AlbumCard data={album} />
                    </Link>
                  </Col>
                ))}
            </Row>
          </Container>
          <Container className='text-light mt-5'>
            <h1>#HipHop</h1>
            <Row className='mt-4'>
              {albums &&
                albums['Coldplay'].map((album, index) => (
                  <Col key={index} lg={3}>
                    <Link
                      to={`/album/${album.album.id}`}
                      className='text-decoration-none text-light'
                    >
                      <AlbumCard data={album} />
                    </Link>
                  </Col>
                ))}
            </Row>
          </Container>
        </>
      )}
      {isSearch && <SearchAlbums />}
    </div>
  );
};

export default HomepageAlbums;
