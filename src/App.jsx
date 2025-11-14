import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/books/fantasy.json"
import Booklist from "./Booklist"
import New from "./components/New"

function App() {
  return (
    <>
      <Booklist Book={Booklist} />
      <New />
    </>
  )
}

export default App
