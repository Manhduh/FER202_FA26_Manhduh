import { useState } from 'react';
import { Card, Form, ListGroup } from 'react-bootstrap';

const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Grape', 'Watermelon'];

export default function SearchFilter() {
  const [query, setQuery] = useState('');
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Exercise 6 - Search Filter</Card.Title>
        <Form.Control
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search item..."
          className="mb-3"
        />
        <ListGroup>
          {filteredItems.map((item) => <ListGroup.Item key={item}>{item}</ListGroup.Item>)}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
