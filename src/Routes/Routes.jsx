import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/BookDetails/BookDetails";
import About from "../pages/About/About";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            Component:Home,
            loader: ()=> fetch('/booksData.json'),
        },
        {
            path:"/bookDetails/:id",
            Component:BookDetails
        },
        {
            path:'/about',
            Component:About
        }
    ]

  },
]);