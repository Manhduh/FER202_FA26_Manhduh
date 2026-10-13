import { Container, Nav, Navbar, Table } from 'react-bootstrap';
import {
  Link,
  Navigate,
  NavLink,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

const BASE = '/bai2';
const BOOKS = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', year: 2008 },
  { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt, David Thomas', year: 1999 },
  { id: 3, title: 'Refactoring', author: 'Martin Fowler', year: 2018 },
];

function MainLayout() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to={BASE}>FPT University Library</Navbar.Brand>
          <Navbar.Toggle aria-controls="library-navbar" />
          <Navbar.Collapse id="library-navbar">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to={BASE} end>Trang chủ</Nav.Link>
              <Nav.Link as={NavLink} to={`${BASE}/books`}>Sách</Nav.Link>
              <Nav.Link as={NavLink} to={`${BASE}/help`}>Hướng dẫn</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container as="main" className="py-5">
        <Outlet />
      </Container>

      <footer className="bg-light text-center py-3 mt-auto">
        <p className="mb-0">© 2026 Thư viện FPT University. All rights reserved.</p>
      </footer>
    </>
  );
}

function HomePage() {
  return (
    <section className="text-center">
      <h1>Chào mừng đến với Thư viện FPT</h1>
      <p className="lead">Không gian học tập và khám phá tri thức dành cho sinh viên.</p>
      <Link className="btn btn-primary mt-3" to={`${BASE}/books`}>Khám phá sách</Link>
    </section>
  );
}

function BooksPage() {
  return (
    <>
      <h1 className="mb-4">Danh sách sách</h1>
      <Table bordered hover responsive>
        <thead>
          <tr><th>#</th><th>Tên sách</th><th>Tác giả</th><th>Năm xuất bản</th></tr>
        </thead>
        <tbody>
          {BOOKS.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

function HelpLayout() {
  return (
    <>
      <h1 className="mb-4">Hướng dẫn sử dụng</h1>
      <Nav variant="tabs" className="mb-4">
        <Nav.Link as={NavLink} to="faq">Câu hỏi thường gặp</Nav.Link>
        <Nav.Link as={NavLink} to="rules">Nội quy</Nav.Link>
      </Nav>
      <Outlet />
    </>
  );
}

function FaqPage() {
  return (
    <section>
      <h2>Câu hỏi thường gặp</h2>
      <p className="mb-0">Sinh viên có thể mượn sách tại quầy thư viện bằng thẻ sinh viên.</p>
    </section>
  );
}

function RulesPage() {
  return (
    <section>
      <h2>Nội quy thư viện</h2>
      <p className="mb-0">Giữ gìn sách, giữ yên lặng và trả sách đúng hạn.</p>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="text-center">
      <h1 className="display-3 text-danger">404</h1>
      <h2>Không tìm thấy trang</h2>
      <p><Link to={BASE}>Về trang chủ</Link></p>
    </section>
  );
}

function Exercise2() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="help" element={<HelpLayout />}>
          <Route index element={<Navigate to="faq" replace />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="rules" element={<RulesPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Exercise2;
