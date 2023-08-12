import { createBrowserRouter } from "react-router-dom";
import AppliedJobs from "../components/AppliedJobs/AppliedJobs";
import Blog from "../components/Blog/Blog";
import Statistics from "../components/Statistics/Statistics";
import Main from "../components/Layout/Main";
import Home from "../components/Home/Home";
import JobDetails from "../components/JobDetails/jobDetails";

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
            path: "/job/:id",
            element: <JobDetails />
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