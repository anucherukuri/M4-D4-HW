import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form } from "react-bootstrap";

import CommentArea from "./CommentArea";
const headers = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjdmYjRjZmY1ZjAwMTU5MGJkY2UiLCJpYXQiOjE2Mzk2NTYzMzIsImV4cCI6MTY0MDg2NTkzMn0.KkL6gE19PAo5kGP1HhCB0UmFbMdpK04l4mT5mvTrJhY",
  },
};

const AddComment = (props) => {
  const addComments = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/",headers
    );
  };
  return (
    <div>
      <CommentArea>${props.AddComment}</CommentArea>
    </div>
  );
};
export default AddComment;
