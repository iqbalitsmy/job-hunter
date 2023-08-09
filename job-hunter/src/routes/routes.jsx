import { createBrowserRouter } from "react-router-dom";
import AppliedJobs from "../components/AppliedJobs/AppliedJobs";
import Blog from "../components/Blog/Blog";
import Statistics from "../components/Statistics/Statistics";
import Main from "../components/Layout/Main";
import Navigation from "../components/Navigation/Navigation";
import Home from "../components/Home/Home";

  const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/appliedjobs",
            element: <AppliedJobs/>
          },
          {
            path: "/blog",
            element: <Blog/>
          },
          {
            path: "/statistics",
            element: <Statistics/>
          },
        ]
    }
  ])

  export default router;