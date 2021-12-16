import { Badge } from "react-bootstrap"

const MyBadge = (props) => {

  return <Badge style = {props.color}>{props.message}</Badge>
}

export default MyBadge
