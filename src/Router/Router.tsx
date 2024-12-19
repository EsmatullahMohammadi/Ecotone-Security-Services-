import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import About from "../components/About";
import Blog from "../components/Blog";
import Results from "../components/Results";
import Banner from "../components/Banner";
import Companies from "../components/Companies";
import Team from "../components/Team";
import Comments from "../components/Comments";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element: <Home />
        },
        {
            path:"contact",
            element: <Contact />
        },
        {
            path:"service",
            element: <Projects />
        },
        {
            path:"about-us",
            element: (
                <>
                <Home />
                <About />
                <Projects />
                <Banner />
                <Companies />
                <Team />
                <Comments />
                <Results />
                <Blog />
                <Contact />
                </>
            )
        },
        {
            path:"join-our-team",
            element: (
                <>
                    <Team />
                </>
            )
        },
        // {
        //     path:"service",
        //     element: <Projects />
        // },
      ]
    }
  ]);
  export default router;