import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Navigation from "../components/Navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { db, auth } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function PostPageUpdate() {
  const params = useParams();
  const id = params.id;
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  async function updatePost() {
    await updateDoc(doc(db, "posts", id), { caption, image });
    navigate("/post/" + id); // send back to the details page
  }

  async function getPost(id) {
    const postDocument = await getDoc(doc(db, "posts", id));
    const post = postDocument.data();
    setCaption(post.caption);
    setImage(post.image);
  }

  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/login");
    getPost(id);
  }, [id, loading, navigate, user]);

  return (
    <>
      <Navigation />
      <Container>
        <h1 style={{ marginBlock: "1rem" }}>Update Post</h1>
        <Form>
          <Form.Group className="mb-3" controlId="caption">
            <Form.Label>Caption</Form.Label>
            <Form.Control
              type="text"
              placeholder="Lovely day"
              value={caption}
              onChange={(text) => setCaption(text.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="image">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="https://zca.sg/img/1"
              value={image}
              onChange={(text) => setImage(text.target.value)}
            />
            <Form.Text className="text-muted">
              Make sure the url has a image type at the end: jpg, jpeg, png.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={(e) => updatePost()}>
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
}
