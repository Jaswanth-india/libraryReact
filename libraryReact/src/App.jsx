import "./App.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import reduxStore from "./utils/reduxStore";
import {Provider} from "react-redux";

function App() {
  return (
  <Provider store={reduxStore}>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Browse Books</Link></li>
        <li><Link to="/addBook">Add Book</Link></li>
      </ul>
      <hr></hr>
    </nav>
    <Outlet/>
  </Provider>
  )
}

export default App;
