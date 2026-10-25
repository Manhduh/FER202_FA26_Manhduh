import { useState } from 'react';
import { Badge, Button, Card, Col, Form, Row, Spinner, Alert } from 'react-bootstrap';
import { Link, useSearchParams } from 'react-router-dom';
import postApi, { userApi } from '../api/postApi';
import useAxios from '../hooks/useAxios';

const PAGE_SIZE = 10;

export default function PostsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(1, Number(searchParams.get('page')) || 1);
  const userId = searchParams.get('userId') || '';

  const { data: users } = useAxios(
    (signal) => userApi.getAll(signal),
    [],
    { initialData: [] }
  );

  function changeParams(nextValues) {
    const nextParams = new URLSearchParams(searchParams);
    Object.entries(nextValues).forEach(([key, value]) => {
      if (value === '' || value == null) {
        nextParams.delete(key);
      } else {
        nextParams.set(key, String(value));
      }
    });
    setSearchParams(nextParams);
  }

  const params = {
    _page: page,
    _limit: PAGE_SIZE,
  };
  if (userId) params.userId = userId;

  const {
    data: posts,
    headers,
    loading,
    error,
    refetch,
  } = useAxios(
    (signal) => postApi.getAll(params, signal),
    [page, userId],
    { initialData: [] }
  );

  const total = Number(headers['x-total-count'] ?? posts.length);
  const totalPages = Math.ceil(total / PAGE_SIZE);
  const authorName = (id) => users.find((u) => u.id === id)?.name ?? `User ${id}`;

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Danh sách bài viết <Badge bg="secondary">{total}</Badge></h2>
      </div>

      <Card className="mb-4">
        <Card.Body>
          <Form.Label>Lọc theo tác giả</Form.Label>
          <Form.Select
            value={userId}
            onChange={(e) => changeParams({ userId: e.target.value, page: 1 })}
          >
            <option value="">Tất cả tác giả</option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>{u.name}</option>
            ))}
          </Form.Select>
        </Card.Body>
      </Card>

      {loading ? (
        <div className="text-center py-5"><Spinner animation="border" /></div>
      ) : error ? (
        <Alert variant="danger">{error} <Button size="sm" onClick={refetch}>Thử lại</Button></Alert>
      ) : (
        <>
          <Row className="g-3">
            {posts.map((post) => (
              <Col xs={12} md={6} key={post.id}>
                <Card className="h-100 shadow-sm">
                  <Card.Body>
                    <div className="text-muted small mb-2">Tác giả: {authorName(post.userId)}</div>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.body}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <span>Trang {page} / {totalPages} (Tổng {total} bài viết)</span>
            <div className="d-flex gap-2">
              <Button disabled={page <= 1} onClick={() => changeParams({ page: page - 1 })}>Trang trước</Button>
              <Button disabled={page >= totalPages} onClick={() => changeParams({ page: page + 1 })}>Trang sau</Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
