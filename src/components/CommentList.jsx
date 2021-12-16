import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";
import AddComment from "./AddComment";

const headers = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjdmYjRjZmY1ZjAwMTU5MGJkY2UiLCJpYXQiOjE2Mzk2NTYzMzIsImV4cCI6MTY0MDg2NTkzMn0.KkL6gE19PAo5kGP1HhCB0UmFbMdpK04l4mT5mvTrJhY",
  },
};

const CommentList = () =>{
    const listOfComments = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/",
      {headers,
      method: 'GET'
      });
  };

<div>
<ListGroup>
  <ListGroup.Item>${AddComment}</ListGroup.Item>
  </ListGroup>
</div>

}


export default CommentList;