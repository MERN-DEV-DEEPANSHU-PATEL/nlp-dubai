import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./Layout";
import About from "./pages/about/About";
import AboutNlp from "./components/About-Nlp/About-npl";
import Courses from "./pages/courses/Courses";
import Training from "./pages/training/Training";
import Events from "./pages/events/Events";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import SingleBlog from "./components/singleBlog/SingleBlog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/training",
        element: <Training />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
