import { Container, Nav, Tab } from 'react-bootstrap';
import Counter from './components/Counter';
import ControlledInput from './components/ControlledInput';
import ToggleVisibility from './components/ToggleVisibility';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <Container className="py-4 exercise-box">
      <h1 className="mb-2">useState Exercises</h1>
      <p className="text-muted">Exercises 1 - 4</p>
      <Tab.Container defaultActiveKey="1">
        <Nav variant="tabs" className="mb-4">
          <Nav.Item><Nav.Link eventKey="1">Bài 1</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="2">Bài 2</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="3">Bài 3</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="4">Bài 4</Nav.Link></Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="1"><Counter /></Tab.Pane>
          <Tab.Pane eventKey="2"><ControlledInput /></Tab.Pane>
          <Tab.Pane eventKey="3"><ToggleVisibility /></Tab.Pane>
          <Tab.Pane eventKey="4"><TodoList /></Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}
