import { useEffect, useState } from 'react';
import { Alert, Button, Card, Form, Spinner } from 'react-bootstrap';
import useAxios from '../../hooks/useAxios';
import postApi from '../../api/postApi';

const POST_ID = 1;

export default function UpdatePostCard() {
  const { data: post, loading, error } = useAxios(
    (signal) => postApi.getById(POST_ID, signal),
    [],
    { initialData: null }
  );

  return (
    <Card className="h-100 shadow-sm">
      <Card.Header><strong>2.3 · GET + PUT</strong> /posts/1</Card.Header>
      <Card.Body>
        {loading ? <Spinner animation="border" /> : <p>{post?.title}</p>}
      </Card.Body>
    </Card>
  );
}
