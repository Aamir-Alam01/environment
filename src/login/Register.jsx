import React, {useEffect, useState, useRef} from 'react';
import Home from '../component/Home';

const Register = () => {
  const username= useRef();
  const email= useRef();
  const password= useRef();
  const confirmpassword= useRef();
  const [showHome, setShowHome] = useState(false)
  const localSignUp = localStorage.getItem("signUp");
  useEffect(()=>{
    if(localSignUp){
      setShowHome(true)
    }
  })

  const handleClick = (event)=>{
    event.preventDefault();
    if(username.current.value && email.current.value && password.current.value&& confirmpassword.current.value){
      localStorage.setItem("name", username.current.value)
      localStorage.setItem("email", email.current.value)
      localStorage.setItem("password", password.current.value)
      localStorage.setItem("signUp", email.current.value)
      alert("Account Created Succesfully")
      window.location.reload();
      
    }
      // console.log(username.current.value, email.current.value, password.current.value, confirmpassword.current.value);

  }

  return (
    <div className="r-parent">
      {showHome?<Home/>:
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
}
    </div>
  );
}

export default Register;
