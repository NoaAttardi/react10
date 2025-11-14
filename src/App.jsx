import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/books/fantasy.json"
import Booklist from "./Booklist"

function App() {
  return (
    <>
      <Booklist Book={Booklist} />
    </>
  )
}

export default App
