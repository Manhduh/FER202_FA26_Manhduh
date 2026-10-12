
import { Navbar, Nav, Container, Button, Card, Row, Col, ListGroup } from 'react-bootstrap';
import { Routes, Route, Link, NavLink } from 'react-router-dom';

const MENU = [
  { to: '/', label: 'Trang chủ' },
  { to: '/skills', label: 'Kỹ năng' },
  { to: '/projects', label: 'Dự án' },
  { to: '/contact', label: 'Liên hệ' }
];

// Navbar dung chung cho tat ca cac trang
function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          My Portfolio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            {MENU.map((item) => (
              <Nav.Link
                as={NavLink}
                to={item.to}
                end={item.to === '/'}
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

// Trang chu
function HomePage() {
  return (
    <Container className="py-5 text-center">
      <h1>Xin chao, toi la Manh Dung!</h1>
      <p className="lead mt-3">
        Toi la sinh vien Ky thuat phan mem va mong muon tro thanh Software Developer.
      </p>
      <p>
        Chao mung ban den voi portfolio ca nhan cua toi.
      </p>

      <Button as={Link} to="/projects" variant="primary">
        Xem du an cua minh
      </Button>
    </Container>
  );
}

// Trang ky nang
function SkillsPage() {
  const skills = [
    'HTML va CSS',
    'JavaScript',
    'ReactJS',
    'Java',
    'SQL Server'
  ];

  return (
    <Container className="py-5">
      <h2 className="mb-4">Ky nang cua toi</h2>

      <ListGroup>
        {skills.map((skill, index) => (
          <ListGroup.Item key={index}>
            {skill}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

// Trang du an
function ProjectsPage() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Website gioi thieu ban than su dung ReactJS.'
    },
    {
      title: 'Book Management',
      description: 'Ung dung quan ly sach va thong tin sach.'
    },
    {
      title: 'Student Management',
      description: 'Ung dung quan ly sinh vien va diem so.'
    }
  ];

  return (
    <Container className="py-5">
      <h2 className="mb-4">Du an cua toi</h2>

      <Row className="g-4">
        {projects.map((project, index) => (
          <Col md={4} key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="outline-primary" disabled>
                  Dang cap nhat
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

// Trang lien he
function ContactPage() {
  return (
    <Container className="py-5">
      <h2>Lien he</h2>
      <p>Email: example@gmail.com</p>
      <p>Vi tri: Da Nang, Viet Nam</p>
    </Container>
  );
}

// Trang 404
function NotFoundPage() {
  return (
    <Container className="py-5 text-center">
      <h1 className="display-3 text-danger">404</h1>
      <h2>Khong tim thay trang</h2>
      <p>Duong dan ban truy cap khong ton tai.</p>

      <Button as={Link} to="/" variant="primary">
        Ve trang chu
      </Button>
    </Container>
  );
}

// Khai bao cac route
function App() {
  return (
    <>
      <AppNavbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <footer className="bg-light text-center py-3 mt-4">
        <p className="mb-0">
          © 2026 My Portfolio
        </p>
      </footer>
    </>
  );
}

export default App;
