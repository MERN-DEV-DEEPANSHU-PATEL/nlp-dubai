import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./Layout";
import About from "./pages/about/About";
import Courses from "./pages/courses/Courses";
import Training from "./pages/training/Training";
import Events from "./pages/events/Events";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import SingleBlog from "./pages/blog/singleBlog/SingleBlog";
import Error404 from "./pages/404error/Error404";
import SingleCourse from "./pages/courses/singleCourse/SingleCourse";
import SingleTraining from "./pages/training/singleTraininf/SingleTraining";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <Error404 />,
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
        path: "/courses/:id",
        element: <SingleCourse />,
      },
      {
        path: "/training",
        element: <Training />,
      },
      {
        path: "/training/:id",
        element: <SingleTraining />,
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
