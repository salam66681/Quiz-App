
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Working from './pages/Working';
import Features from './pages/Features';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: '/', element: <Home/>
      },
      {
        path: '/working', element: <Working/>
      },
      {
        path: '/features', element: <Features/>
      },
      {
        path: '/about', element: <About/>
      },
      {
        path: '/quiz', element: <Quiz/>
      }
    ]
  },
]);

function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
