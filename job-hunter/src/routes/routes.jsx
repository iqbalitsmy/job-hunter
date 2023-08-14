import { createBrowserRouter } from "react-router-dom";
import AppliedJobs from "../components/AppliedJobs/AppliedJobs";
import Blog from "../components/Blog/Blog";
import Statistics from "../components/Statistics/Statistics";
import Main from "../components/Layout/Main";
import Home from "../components/Home/Home";
import JobDetails from "../components/JobDetails/jobDetails";
import { findObj } from "../components/Loaders/jsonLoaders";
import appliedJobLoader from "../utilities/Loaders";
import NotFound from "../components/NotFound/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/job/:id',
        element: <JobDetails></JobDetails>,
        loader: ({params}) => findObj(params.id)
      },
      {
        path: "/appliedjobs",
        element: <AppliedJobs />,
        loader: appliedJobLoader
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/statistics",
        element: <Statistics />
      },
      {
        path: '*',
        element: <NotFound></NotFound>
      }
    ]
  }
])

export default router;