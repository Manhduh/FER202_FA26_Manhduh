import { useState } from 'react';
import { Card, Form, Button, ListGroup } from 'react-bootstrap';

export default function TodoList() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    const value = todo.trim();
    if (!value) return;
    setTodos((prev) => [...prev, { id: Date.now(), text: value }]);
    setTodo('');
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Exercise 4 - Todo List</Card.Title>
        <Form onSubmit={addTodo} className="d-flex gap-2 mb-3">
          <Form.Control value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="New todo" />
          <Button type="submit">Add</Button>
        </Form>
        <ListGroup>
          {todos.map((item) => (
            <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
              {item.text}
              <Button variant="outline-danger" size="sm" onClick={() => deleteTodo(item.id)}>Delete</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
