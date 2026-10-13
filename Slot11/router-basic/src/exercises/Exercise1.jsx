import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Nav,
  Navbar,
  Row,
} from 'react-bootstrap';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
import '../App.css';

const BASE = '/bai1';
const MENU = [
  { to: BASE, label: 'Trang chủ' },
  { to: `${BASE}/skills`, label: 'Kỹ năng' },
  { to: `${BASE}/projects`, label: 'Dự án' },
  { to: `${BASE}/contact`, label: 'Liên hệ' },
];

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={BASE}>Manh Dung</Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-navbar" />
        <Navbar.Collapse id="portfolio-navbar">
          <Nav className="ms-auto">
            {MENU.map((item) => (
              <Nav.Link
                as={NavLink}
                to={item.to}
                end={item.to === BASE}
                key={item.to}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function HomePage() {
  return (
    <Container className="py-5 text-center">
      <h1>Xin chào, tôi là Manh Dung!</h1>
      <p className="lead mt-3">
        Tôi là sinh viên Kỹ thuật phần mềm và mong muốn trở thành Software Developer.
      </p>
      <p>Chào mừng bạn đến với portfolio cá nhân của tôi.</p>
      <Button as={Link} to={`${BASE}/projects`} variant="primary">
        Xem dự án của mình
      </Button>
    </Container>
  );
}

function SkillsPage() {
  const skills = ['HTML và CSS', 'JavaScript', 'ReactJS', 'Java', 'SQL Server'];

  return (
    <Container className="py-5">
      <h2 className="mb-4">Kỹ năng của tôi</h2>
      <ListGroup>
        {skills.map((skill) => <ListGroup.Item key={skill}>{skill}</ListGroup.Item>)}
      </ListGroup>
    </Container>
  );
}

function ProjectsPage() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Website giới thiệu bản thân sử dụng ReactJS.',
    },
    {
      title: 'Book Management',
      description: 'Ứng dụng quản lý sách và thông tin sách.',
    },
    {
      title: 'Student Management',
      description: 'Ứng dụng quản lý sinh viên và điểm số.',
    },
  ];

  return (
    <Container className="py-5">
      <h2 className="mb-4">Dự án của tôi</h2>
      <Row className="g-4">
        {projects.map((project) => (
          <Col md={4} key={project.title}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="outline-primary" disabled>Đang cập nhật</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function ContactPage() {
  return (
    <Container className="py-5">
      <h2>Liên hệ</h2>
      <p>Email: example@gmail.com</p>
      <p>Vị trí: Đà Nẵng, Việt Nam</p>
    </Container>
  );
}

function NotFoundPage() {
  return (
    <Container className="py-5 text-center">
      <h1 className="display-3 text-danger">404</h1>
      <h2>Không tìm thấy trang</h2>
      <p>Đường dẫn bạn truy cập không tồn tại.</p>
      <Button as={Link} to={BASE} variant="primary">Về trang chủ</Button>
    </Container>
  );
}

function Exercise1() {
  return (
    <>
      <AppNavbar />
      <main>
        <Routes>
          <Route path="/bai1" element={<HomePage />} />
          <Route path="/bai1/skills" element={<SkillsPage />} />
          <Route path="/bai1/projects" element={<ProjectsPage />} />
          <Route path="/bai1/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <footer className="bg-light text-center py-3 mt-4">
        <p className="mb-0">© 2026 My Portfolio</p>
      </footer>
    </>
  );
}

export default Exercise1;
