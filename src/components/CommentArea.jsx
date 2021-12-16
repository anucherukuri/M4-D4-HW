import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Row,
  Col,
   Form
} from "react-bootstrap"
import SingleBook from "./SingleBook"



const CommentArea= (props) =>{
    const comments = async() =>{
        const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/')
        const data = await response.json()
        console.log(data)
    }
    return(
<div>
     <SingleBook books={books}/>
<Row>
    <Form.Label column="lg" lg={2}>
     comments();
    </Form.Label>
    <Col>
      <Form.Control size="lg" type="text" placeholder="Enter Comment" />
    </Col>
  </Row>
  </div>
    )

}
export default CommentArea