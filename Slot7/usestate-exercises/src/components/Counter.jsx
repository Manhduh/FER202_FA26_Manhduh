import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Card className="shadow-sm">
      <Card.Body className="text-center">
        <Card.Title>Exercise 1 - Simple Counter</Card.Title>
        <h2 className="my-4">{count}</h2>
        <div className="d-flex justify-content-center gap-2">
          <Button variant="primary" onClick={() => setCount((prev) => prev + 1)}>Increment +1</Button>
          <Button variant="secondary" onClick={() => setCount((prev) => prev - 1)}>Decrement -1</Button>
          <Button variant="danger" onClick={() => setCount(0)}>Reset</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
