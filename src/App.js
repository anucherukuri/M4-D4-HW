import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
import books from "./data/books.json"
import BookList from "./components/BookList"
import AddComment from "./components/AddComment"
import CommentList from "./components/CommentList"

function App() {
  return (
    <div className="App">
      <WarningSign message="Hey This is a warning"></WarningSign>

      <h1>
        <MyBadge color="red" message="Hello"></MyBadge>
      </h1>

      <BookList books={books} />
      <AddComment>This is a Comment</AddComment>
      <CommentList>${CommentList}</CommentList>
    </div>
  )
}

export default App

