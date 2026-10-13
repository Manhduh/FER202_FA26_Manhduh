import { Button, Container, Form, Table } from 'react-bootstrap';
import { Route, Routes, useSearchParams } from 'react-router-dom';

const STUDENTS = [
  { id: 'SE180001', name: 'Phạm Minh Anh', className: 'SE20B02', gpa: 3.6 },
  { id: 'SE180002', name: 'Võ Thanh Dũng', className: 'SE20B01', gpa: 3.2 },
  { id: 'SE180003', name: 'Đỗ Ngọc Hân', className: 'SE20B04', gpa: 3.8 },
  { id: 'SE180004', name: 'Nguyễn Văn Bình', className: 'SE20B01', gpa: 3.1 },
  { id: 'SE180005', name: 'Trần Thị Lan', className: 'SE20B02', gpa: 3.5 },
  { id: 'SE180006', name: 'Lê Quang Huy', className: 'SE20B04', gpa: 3.4 },
];
const CLASSES = ['SE20B01', 'SE20B02', 'SE20B04'];

function StudentDirectoryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const selectedClass = searchParams.get('class') ?? '';

  function updateParam(key, value, replace = false) {
    setSearchParams((previous) => {
      const next = new URLSearchParams(previous);
      if (value) {
        next.set(key, value);
      } else {
        next.delete(key);
      }
      return next;
    }, { replace });
  }

  const normalizedQuery = query.toLowerCase();
  const results = STUDENTS.filter((student) => {
    const matchesQuery = !normalizedQuery
      || student.name.toLowerCase().includes(normalizedQuery)
      || student.id.toLowerCase().includes(normalizedQuery);
    const matchesClass = !selectedClass || student.className === selectedClass;
    return matchesQuery && matchesClass;
  });

  return (
    <Container className="py-5">
      <h1 className="mb-4">Danh bạ sinh viên</h1>
      <div className="row g-3 mb-3">
        <Form.Group className="col-md-8" controlId="student-search">
          <Form.Label>Tìm theo tên hoặc MSSV</Form.Label>
          <Form.Control
            value={query}
            onChange={(event) => updateParam('q', event.target.value, true)}
            placeholder="Ví dụ: anh hoặc SE180001"
          />
        </Form.Group>
        <Form.Group className="col-md-4" controlId="student-class">
          <Form.Label>Lớp</Form.Label>
          <Form.Select
            value={selectedClass}
            onChange={(event) => updateParam('class', event.target.value)}
          >
            <option value="">Tất cả lớp</option>
            {CLASSES.map((className) => (
              <option key={className} value={className}>{className}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </div>

      <div className="d-flex align-items-center justify-content-between mb-3">
        <p className="mb-0">Tìm thấy {results.length}/{STUDENTS.length} sinh viên</p>
        <Button variant="outline-secondary" onClick={() => setSearchParams({})}>
          Xóa lọc
        </Button>
      </div>

      <Table bordered hover responsive>
        <thead>
          <tr><th>MSSV</th><th>Họ và tên</th><th>Lớp</th><th>GPA</th></tr>
        </thead>
        <tbody>
          {results.length ? results.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.className}</td>
              <td>{student.gpa.toFixed(1)}</td>
            </tr>
          )) : (
            <tr><td className="text-center" colSpan={4}>Không có sinh viên phù hợp.</td></tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}

function Exercise5() {
  return (
    <Routes>
      <Route path="/" element={<StudentDirectoryPage />} />
      <Route path="*" element={<StudentDirectoryPage />} />
    </Routes>
  );
}

export default Exercise5;
