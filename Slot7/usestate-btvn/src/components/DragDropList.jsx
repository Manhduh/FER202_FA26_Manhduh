import { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

export default function DragDropList() {
  const [items, setItems] = useState(initialItems);
  const [draggingItem, setDraggingItem] = useState(null);

  const handleDragStart = (index) => setDraggingItem(index);
  const handleDragEnd = () => setDraggingItem(null);

  const handleDrop = (dropIndex) => {
    if (draggingItem === null || draggingItem === dropIndex) return;
    setItems((prev) => {
      const next = [...prev];
      const [moved] = next.splice(draggingItem, 1);
      next.splice(dropIndex, 0, moved);
      return next;
    });
    setDraggingItem(null);
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Exercise 7 - Drag and Drop List</Card.Title>
        <ListGroup>
          {items.map((item, index) => (
            <ListGroup.Item
              key={item}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(index)}
              onDragEnd={handleDragEnd}
              style={{ cursor: 'grab', opacity: draggingItem === index ? 0.5 : 1 }}
            >
              {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
