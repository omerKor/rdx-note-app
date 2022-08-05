import { useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import styles from "./NoteContent.module.css";
import check from "../../assets/check.svg";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/notes/notesSlice";
import { nanoid } from "@reduxjs/toolkit";

const NoteContent = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("bgYellow");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length < 3 || content.length < 3) {
      alert("Inputs Must be at Least 3 Characters");
      return;
    }

    dispatch(addNote({ id: nanoid(), title, content, color }));

    setTitle("");
    setContent("");
  };
  return (
    <Container>
      <Row>
        <h1 className={styles.mainTitle}>Rdx-Note App</h1>

        {/* Color */}

        <Col md={4} className={styles.NoteContentContainer}>
          <h4>Choose a Color</h4>
          <div className={styles.colorBox}>
            <button
              type="button"
              className={styles.NoteContentCheckColorYellow}
              onClick={(e) => setColor("bgYellow")}
            >
              {color === "bgYellow" && <img src={check} alt="" />}
            </button>
            <button
              type="button"
              className={styles.NoteContentCheckColorBlue}
              onClick={(e) => setColor("bgBlue")}
            >
              {color === "bgBlue" && <img src={check} alt="" />}
            </button>

            <button
              type="button"
              className={styles.NoteContentCheckColorGrey}
              onClick={(e) => setColor("bgGrey")}
            >
              {color === "bgGrey" && <img src={check} alt="" />}
            </button>
            <button
              type="button"
              className={styles.NoteContentCheckColorBtnGreen}
              onClick={(e) => setColor("bgGreen")}
            >
              {color === "bgGreen" && <img src={check} alt="" />}
            </button>
          </div>

          {/* Icons */}
        </Col>
        {/* Form */}

        <Col md={8}>
          <Form className={styles.NoteContentContainer} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Note Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter a title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Note</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            <button className={styles.submitButton}>Add Note</button>
          </Form>
        </Col>

      </Row>
    </Container>
  );
};

export default NoteContent;
