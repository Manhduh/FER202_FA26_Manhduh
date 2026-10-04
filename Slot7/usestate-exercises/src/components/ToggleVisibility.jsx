import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

export default function ToggleVisibility() {
  const [visible, setVisible] = useState(false);

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Exercise 3 - Toggle Visibility</Card.Title>
        <Button onClick={() => setVisible((prev) => !prev)}>
          {visible ? 'Hide' : 'Show'}
        </Button>
        {visible && <p className="mt-3 mb-0">This text is now visible.</p>}
      </Card.Body>
    </Card>
  );
}
