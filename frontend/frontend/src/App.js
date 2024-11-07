// import './App.css';
// import Home from './components/Home';
// import NavBar from './components/Navbar'; 
// import AboutUs from './components/Aboutus';
// import RecipesByArea from './components/RecipesByArea'; 
// import RecipeDetail from './components/RecipeDetail'; 
// import Login from './components/Login';
// import Register from './components/Register';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import NorthIndian from './components/NorthIndian';
// import SouthIndian from './components/SouthIndian';
// import Continental from './components/Continental';
// import Recipe from './components/Recipe';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <>
//         <NavBar />
//         <Home />
//       </>
//     ),
//   },
//   {
//     path: '/about',
//     element: (
//       <>
//         <NavBar />
//         <AboutUs />
//       </>
//     ),
//   },
//   {
//     path: '/recipes/:area',
//     element: (
//       <>
//         <NavBar />
//         <RecipesByArea />
//       </>
//     ),
//   },
//   {
//     path: '/recipe/:id',
//     element: (
//       <>
//         <NavBar />
//         <RecipeDetail />
//       </>
//     ),
//   },
//   {
//     path: '/login',
//     element: (
//       <>
//         <NavBar />
//         <Login />
//       </>
//     ),
//   },
//   {
//     path: '/register',
//     element: (
//       <>
//         <NavBar />
//         <Register />
//       </>
//     ),
//   },
//   {
//     path: '/north',
//     element: (
//       <>
//         <NavBar />
//         <NorthIndian/>
//       </>
//     ),
//   },
//   {
//     path: '/south',
//     element: (
//       <>
//         <NavBar />
//         <SouthIndian/>
//       </>
//     ),
//   },
//   {
//     path: '/Continental',
//     element: (
//       <>
//         <NavBar />
//         <Continental/>
//       </>
//     ),
//   },
//   {
//     path: '/Recipe',
//     element: (
//       <>
//         <NavBar />
//         <Recipe/>
//       </>
//     ),
//   },
// ]);
// function App() {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App;



import './App.css';
import Home from './components/Home';
import NavBar from './components/Navbar'; 
import AboutUs from './components/Aboutus';
import RecipesByArea from './components/RecipesByArea'; 
import Login from './components/Login';
import Signup from './components/Signup';
import NorthIndian from './components/NorthIndian';
import SouthIndian from './components/SouthIndian';
import Continental from './components/Continental';
import Recipe from './components/Recipe';
import RecipeDetails from './components/RecipeDetails';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <NavBar />
        <AboutUs />
      </>
    ),
  },
  {
    path: '/recipes/:area',
    element: (
      <>
        <NavBar />
        <RecipesByArea />
      </>
    ),
  },
  {
    path: '/recipes/:category/:id',
    element: (
      <>
        <NavBar />
        <RecipeDetails />
      </>
    ),
  },
  {
    path: '/login',
    element: (
      <>
        <NavBar />
        <Login />
      </>
    ),
  },
  {
    path: '/signup',
    element: (
      <>
        <NavBar />
        <Signup />
      </>
    ),
  },
  {
    path: '/north',
    element: (
      <>
        <NavBar />
        <NorthIndian />
      </>
    ),
  },
  {
    path: '/south',
    element: (
      <>
        <NavBar />
        <SouthIndian />
      </>
    ),
  },
  {
    path: '/Continental',
    element: (
      <>
        <NavBar />
        <Continental />
      </>
    ),
  },
  {
    path: '/Recipe',
    element: (
      <>
        <NavBar />
        <Recipe />
      </>
    ),
  },
  // {
  //   path: '/recipeinfo/:id', // New route for RecipeInfo
  //   element: (
  //     <>
  //       <NavBar />
  //       <RecipeInfo />
  //     </>
  //   ),
  // },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
