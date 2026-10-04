import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';

import StepCounter from './usereducer/StepCounter';
import OrderTracker from './usereducer/OrderTracker';
import KanbanBoard from './usereducer/KanbanBoard';

function App() {
  const [key, setKey] = useState('b1');

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center fw-bold">Thực hành useReducer ReactJS</h2>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-4">
        <Tab eventKey="b1" title="Bài 1: Step Counter">
          <StepCounter />
        </Tab>
        <Tab eventKey="b2" title="Bài 2: Order Tracker">
          <OrderTracker />
        </Tab>
        <Tab eventKey="b3" title="Bài 3: Kanban Board">
          <KanbanBoard />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default App;