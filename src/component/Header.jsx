import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  const logout=()=>{
    localStorage.removeItem("signUp")
    window.location.reload()
  }
  const deleteAccount=()=>{
    localStorage.clear()
    window.location.reload()
  }
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
          Admin Panel
            {/* <BsSearch  className='icon'/> */}
        </div>
        <div className='header-right'>
          <button onClick={logout} className='logout'>Logout</button>
          <button onClick={deleteAccount} className='delete'>Delete ID</button>
            {/* <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/> */}
        </div>
    </header>
  )
}

export default Header