import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../src/Layouts/Main'
import Quizzes from './Components/Quizzes/Quizzes';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import Header from './Components/Header/Header';
import QuizDetail from './Components/QuizDetail/QuizDetail';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        // {
        //   path: '/home',
        //   element: <Header></Header>
        // },
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
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            // console.log(params);
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}

            `)
          },
          element: <QuizDetail></QuizDetail>
        }
      ]
    },
    {
      path: '*',
      element: <div>Route not found</div>
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
