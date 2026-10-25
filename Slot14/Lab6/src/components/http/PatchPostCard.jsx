import { useEffect, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import useAxios from '../../hooks/useAxios';
import postApi from '../../api/postApi';

const POST_ID = 1;

export default function PatchPostCard() {
  const { data: post } = useAxios((s) => postApi.getById(POST_ID, s), []);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (post) setTitle(post.title ?? '');
  }, [post]);

  return (
    <Card className="h-100 shadow-sm">
      <Card.Header><strong>2.4 · PATCH</strong> /posts/1</Card.Header>
      <Card.Body>
        <Form>
          <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form>
      </Card.Body>
    </Card>
  );
}
