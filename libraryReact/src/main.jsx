import React from 'react'
import ReactDOM from 'react-dom/client'
//React Components
import App from './App.jsx';
import Home from "./components/Home.jsx";
import BookList from "./components/BookList.jsx";
import AddBook from "./components/AddBook.jsx"
import Error from "./components/Error.jsx";
import BookDetails from "./components/BookDetails.jsx"
//Router requirements
import { createBrowserRouter,RouterProvider } from "react-router-dom"

let appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/addBook",
        element:<AddBook/>
      },
      {
        path:"/books",
        element:<BookList/>
      },
      {
        path:"/books/:category",
        element:<BookList/>
      },
      {
        path:"/books/bookDetails/:id",
        element:<BookDetails/>
      }
    ],
    errorElement:<Error/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>,
)
