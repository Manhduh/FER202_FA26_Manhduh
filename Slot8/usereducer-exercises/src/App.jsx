import Container from 'react-bootstrap/Container';
import StepCounter from './usereducer/StepCounter';

function App() {
  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center fw-bold">Thực hành useReducer ReactJS</h2>
      <StepCounter />
    </Container>
  );
}

export default App;