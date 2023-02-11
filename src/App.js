import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist//react-datepicker.css';
import { Container } from 'react-bootstrap';
import SearchHotelContainer from './views/searchHotel/SearchHotelContainer';

function App() {
  return (
    <Container >
      <a href="https://novit.ee/" class="mb-2" rel="home" aria-current="page">
        <img width="250" height="83" src="https://novit.ee/wp-content/uploads/2022/09/cropped-logo2018.png" class="custom-logo" alt="Nov IT" />
      </a>
      <Container className="p-4 mb-4 bg-light rounded-3">
          <SearchHotelContainer />
      </Container>
    </Container >
  );
}

export default App;
