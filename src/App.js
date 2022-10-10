import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../src/Layouts/Main'
import Quizzes from './Components/Quizzes/Quizzes';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Quizzes></Quizzes>
        },
        {
          path: '/statistics',
          element: <Statistics> </Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
