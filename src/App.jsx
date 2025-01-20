
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProfileList from './components/ProfileList'
import ProfileDetail from './components/ProfileDetail'
import { ProfileProvider } from './components/ProfileContext'
import Home from './components/Home'
import AdminLogin from './components/AdminLogin'
import AdminDashboard from './components/AdminDashBoard'
import Navbar from './components/Navbar'



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <>
        <Navbar />
        <Home />
      </>,  // Home as the landing page
    },
    {
      path: '/profiles',
      element:
      <>
        <Navbar />
        <ProfileList />
      </> ,
    },
    {
      path: '/profile/:id',
      element:<>
        <Navbar />
        <ProfileDetail />
      </> ,
    },
    {
      path: '/admin-login',
      element: <>
        <Navbar />
        <AdminLogin />
      </>,
    },
    { 
      path: '/admin-dashboard', 
      element: <>
        <Navbar />
        <AdminDashboard />
      </>,
    }

  ]
)

function App() {
  

  return (
    <>
      <ProfileProvider>
        {/* <Navbar /> */}
        <RouterProvider router={router}/>
      </ProfileProvider>
     {/* <ProfileList/> */}
    </>
  )
}

export default App
