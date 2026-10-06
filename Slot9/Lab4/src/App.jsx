import 'bootstrap/dist/css/bootstrap.min.css';
import QuantityPicker from './components/QuantityPicker';

function App() {
  return (
    <div className="container py-4">
      <section className="mb-5">
        <h3 className="mb-3">BÃ i 1 - useState</h3>
        <QuantityPicker />
        <QuantityPicker min={2} max={5} />
      </section>
    </div>
  );
}

export default App;
