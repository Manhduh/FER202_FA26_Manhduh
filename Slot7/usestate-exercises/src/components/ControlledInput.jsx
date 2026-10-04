import { useState } from 'react';
import { Card, Form } from 'react-bootstrap';

export default function ControlledInput() {
  const [text, setText] = useState('');

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Exercise 2 - Controlled Input Field</Card.Title>
        <Form.Control
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <p className="mt-3 mb-0">You typed: <strong>{text}</strong></p>
      </Card.Body>
    </Card>
  );
}
