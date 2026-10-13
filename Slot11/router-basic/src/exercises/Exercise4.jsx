import { useState } from 'react';
import { Alert, Button, Card, Container, Form } from 'react-bootstrap';
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';

const BASE = '/bai4';

function EventPage() {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <Card className="mx-auto shadow-sm" style={{ maxWidth: 680 }}>
        <Card.Body className="p-4 p-md-5 text-center">
          <p className="mb-2 text-primary fw-semibold">FPT UNIVERSITY · 2026</p>
          <Card.Title as="h1">FPTU Tech Day 2026</Card.Title>
          <Card.Text className="my-4">
            Cùng khám phá công nghệ mới, gặp gỡ cộng đồng và chia sẻ ý tưởng sáng tạo.
          </Card.Text>
          <Button onClick={() => navigate(`${BASE}/register`)}>
            Đăng ký ngay
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', session: 'Sáng' });
  const [error, setError] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();

    if (!name || !email.includes('@')) {
      setError('Vui lòng nhập họ tên và email hợp lệ.');
      return;
    }

    navigate(`${BASE}/success`, {
      state: { name, email, session: form.session },
      replace: true,
    });
  }

  return (
    <Container className="py-5">
      <Card className="mx-auto shadow-sm" style={{ maxWidth: 680 }}>
        <Card.Body className="p-4 p-md-5">
          <h1 className="mb-4">Đăng ký tham dự</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group className="mb-3" controlId="registration-name">
              <Form.Label>Họ tên</Form.Label>
              <Form.Control
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nhập họ tên"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registration-email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="registration-session">
              <Form.Label>Buổi tham dự</Form.Label>
              <Form.Select name="session" value={form.session} onChange={handleChange}>
                <option value="Sáng">Buổi sáng</option>
                <option value="Chiều">Buổi chiều</option>
              </Form.Select>
            </Form.Group>
            <div className="d-flex flex-wrap gap-2">
              <Button type="button" variant="outline-secondary" onClick={() => navigate(-1)}>
                Quay lại
              </Button>
              <Button type="submit">Gửi đăng ký</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

function SuccessPage() {
  const { state } = useLocation();

  if (
    !state
    || typeof state !== 'object'
    || typeof state.name !== 'string'
    || typeof state.email !== 'string'
    || typeof state.session !== 'string'
  ) {
    return <Navigate to={`${BASE}/register`} replace />;
  }

  return (
    <Container className="py-5">
      <Card className="mx-auto shadow-sm" style={{ maxWidth: 680 }}>
        <Card.Body className="p-4 p-md-5 text-center">
          <div className="mb-3 text-success fs-1" aria-hidden="true">✓</div>
          <h1>Đăng ký thành công!</h1>
          <p className="my-4">
            Cảm ơn {state.name}, vé đã gửi tới {state.email}. Buổi tham dự: {state.session}.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-2">
            <Button as={Link} to={`${BASE}/register`}>Đăng ký thêm người khác</Button>
            <Button as={Link} to={BASE} variant="outline-primary">Về trang sự kiện</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

function Exercise4() {
  return (
    <Routes>
      <Route path="/bai4" element={<EventPage />} />
      <Route path="/bai4/register" element={<RegisterPage />} />
      <Route path="/bai4/success" element={<SuccessPage />} />
      <Route path="*" element={<Navigate to={BASE} replace />} />
    </Routes>
  );
}

export default Exercise4;
