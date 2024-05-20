import { useState } from 'react';
import './App.css';
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Home from './component/Home';
import Profile from './component/Profile';
import Environment from './component/Environment';
import Action from './component/Action';
import Community from './component/Community';
import Challenge from './component/Challenge';
import Resourse from './component/Resourse';
import YourProfile from './component/YourProfile';  
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Register from './login/Register';



function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
     
      {/* <Challenge /> */}

      <BrowserRouter>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Routes>
          <Route
              exact
              path="/"
              element={<Home />}
          />
          <Route
              exact
              path="/profile"
              element={<Register />} // Replace it with <Profile/> I am using this to test Register system by storing credentials in localStorage
          />
          <Route
              exact
              path="/environment"
              element={<Environment />}
          />
          <Route
              exact
              path="/action"
              element={<Action />}
          />
          <Route
              exact
              path="/community"
              element={<Community />}
          />
          <Route
              exact
              path="/challenges"
              element={<Challenge />}
          />
          <Route
              exact
              path="/resources"
              element={<Resourse />}
          />
          {/* <Route
              exact
              path="/mao"
              element={<Map />}
          /> */}
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
