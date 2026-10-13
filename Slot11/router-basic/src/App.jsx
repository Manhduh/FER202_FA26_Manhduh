import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Exercise1 from './exercises/Exercise1.jsx';
import Exercise2 from './exercises/Exercise2.jsx';
import Exercise3 from './exercises/Exercise3.jsx';
import Exercise4 from './exercises/Exercise4.jsx';

const EXERCISES = [
  { number: 1, title: 'Portfolio cá nhân', description: 'Routes, NavLink và trang 404.' },
  { number: 2, title: 'Thư viện FPT', description: 'Layout route, Outlet và route lồng nhau.' },
  { number: 3, title: 'Danh sách môn học', description: 'Tham số động và useParams.' },
  { number: 4, title: 'Đăng ký sự kiện', description: 'Điều hướng bằng code và truyền state.' },
  { number: 5, title: 'Danh bạ sinh viên', description: 'Tìm kiếm, lọc bằng query string.' },
];

function ExerciseDirectory() {
  return (
    <Container className="py-5">
      <div className="mb-5 text-center">
        <p className="mb-2 text-primary fw-semibold">FER202 · REACT ROUTER</p>
        <h1 className="mb-3">Bộ bài tập điều hướng</h1>
        <p className="lead mx-auto" style={{ maxWidth: 680 }}>
          Chọn một bài tập để khám phá các tính năng định tuyến trong React.
        </p>
      </div>

      <Row className="g-4">
        {EXERCISES.map(({ number, title, description }) => (
          <Col key={number} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <span className="mb-3 text-primary fw-bold">BÀI {number}</span>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button
                  as={Link}
                  to={`/bai${number}`}
                  className="mt-auto align-self-start"
                  variant="outline-primary"
                >
                  Mở bài tập
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExerciseDirectory />} />
      <Route path="/bai1/*" element={<Exercise1 />} />
      <Route path="/bai2/*" element={<Exercise2 />} />
      <Route path="/bai3/*" element={<Exercise3 />} />
      <Route path="/bai4/*" element={<Exercise4 />} />
      <Route path="*" element={<ExerciseDirectory />} />
    </Routes>
  );
}

export default App;
