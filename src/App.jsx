import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Portfolio from './Portfolio/Portfolio'

function App() {

  const router = createBrowserRouter([
    {path: "", element: <Layout />, children: [
        {path: "" , element: <Home />},
        {path: "home", element: <Home />},
        {path: "about", element: <About />},
        {path: "portfolio", element: <Portfolio />},
        {path: "contact", element: <Contact /> },
        {path: "*", element: <div className="container py-5">
          <div className="d-flex justify-content-center align-items-center py-5">
            <div className="content text-center py-5">
              <i class="text-danger fa-regular fa-circle-xmark fa-6x mb-4"></i>
              <h1 className="mb-0">404</h1>
              <h2>Sorry, Page Not Found</h2>
            </div>
          </div>
        </div>
      }
    ]},
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
