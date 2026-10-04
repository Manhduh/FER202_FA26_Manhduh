import { useState } from 'react';
import { Card, Form } from 'react-bootstrap';

const colors = ['red', 'blue', 'green', 'yellow'];

export default function ColorSwitcher() {
  const [color, setColor] = useState('red');

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Exercise 5 - Color Switcher</Card.Title>
        <Form.Select value={color} onChange={(e) => setColor(e.target.value)} className="mb-3">
          {colors.map((item) => <option key={item} value={item}>{item}</option>)}
        </Form.Select>
        <div style={{ height: 180, backgroundColor: color, borderRadius: 10 }} />
      </Card.Body>
    </Card>
  );
}
