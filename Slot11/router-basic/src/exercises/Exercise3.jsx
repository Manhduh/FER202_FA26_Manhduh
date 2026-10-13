import { Alert, Button, Card, Container, Table } from 'react-bootstrap';
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom';
import { COURSES, findCourse } from './courses.js';

const BASE = '/bai3';

function CourseListPage() {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Danh sách môn học</h1>
      <Table bordered hover responsive>
        <thead>
          <tr><th>Mã môn</th><th>Tên môn học</th><th>Tín chỉ</th><th>Học kỳ</th></tr>
        </thead>
        <tbody>
          {COURSES.map((course) => (
            <tr key={course.code}>
              <td><Link to={`${BASE}/courses/${course.code}`}>{course.code}</Link></td>
              <td>{course.name}</td>
              <td>{course.credits}</td>
              <td>{course.semester}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

function CourseDetailPage() {
  const { code = '' } = useParams();
  const course = findCourse(code);

  if (!course) {
    return (
      <Container className="py-5">
        <Alert variant="danger">Không tìm thấy môn học có mã {code}</Alert>
        <Button as={Link} to={`${BASE}/courses`} variant="primary">
          Về danh sách môn học
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Subtitle className="mb-2 text-primary">{course.code}</Card.Subtitle>
          <Card.Title as="h1">{course.name}</Card.Title>
          <Card.Text>{course.desc}</Card.Text>
          <dl className="row mb-4">
            <dt className="col-sm-3">Học kỳ</dt>
            <dd className="col-sm-9">{course.semester}</dd>
            <dt className="col-sm-3">Số tín chỉ</dt>
            <dd className="col-sm-9">{course.credits}</dd>
          </dl>
          <Button as={Link} to={`${BASE}/courses`} variant="outline-primary">
            ← Quay lại danh sách
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

function Exercise3() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`${BASE}/courses`} replace />} />
      <Route path="courses" element={<CourseListPage />} />
      <Route path="courses/:code" element={<CourseDetailPage />} />
      <Route path="*" element={<Navigate to={`${BASE}/courses`} replace />} />
    </Routes>
  );
}

export default Exercise3;
