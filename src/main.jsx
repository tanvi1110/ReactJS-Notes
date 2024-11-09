import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import Home from './components/RouterProject/Home/Home.jsx'
import About from './components/RouterProject/About/About.jsx'
import Contact from './components/RouterProject/Contact/Contact.jsx'
import Header from './components/RouterProject/Header/Header.jsx'
import Footer from './components/RouterProject/Footer/Footer.jsx'
import User from './components/RouterProject/User/User.jsx'
import Github, { githubInfoLoader } from './components/RouterProject/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    }>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />
   
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider  
    future={{
      v7_startTransition: true,
    }}
    router={router} /> */}
    <App />
  </StrictMode>,
)
