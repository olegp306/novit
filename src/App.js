import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist//react-datepicker.css';
import { Container } from 'react-bootstrap';
import SearchHotelContainer from './views/searchHotel/SearchHotelContainer';

function App() {
  return (
      <Container className="mb-3 bg-light rounded-3" style={{ padding: "10px 40px" }}>
        <SearchHotelContainer />
      </Container>
  );
}

export default App;
