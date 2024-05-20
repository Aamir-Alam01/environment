import React from 'react'

const Create_Environment = () => {
  return (
    <div>
    <section className="register-container">
      <header>Registration Form</header>
      <form className="form">
        <div className="input-box">
          <label>Username*</label>
          <input type="text" name="username" placeholder="Enter Username" ref={username}   />
        </div>

        <div className="input-box">
          <label>Email *</label>
          <input type="email" name="email" placeholder="Enter email address" ref={email}   />
        </div>
        <div className="column">
          <div className="input-box">
            <label>Password*</label>
            <input type="password" name="password" placeholder="Password" ref={password}   />
          </div>
          <div className="input-box">
            <label>Confirm Password*</label>
            <input type="password" name="confirm-password" placeholder="Confirm Password" ref={confirmpassword}   />
          </div>
        </div> 
        
        <button type="submit" name="submit" onClick={handleClick}>Submit</button>
        {/* <p className="login-text">Already have an account? <a href="login.php">Login</a></p> */}
    
      </form>
    </section>
    </div>
  )
}

export default Create_Environment
