import React from "react";


const Profile = ()=>{
    return (
        <>
        <div classNameName="parent-container">
            <section className="container">
                <header>User Details</header>
                <form action="" className="form" method="POST">
                <div className="input-box">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter Your Name" value="" required />
                </div>
        
                <div className="input-box">
                    <label>Email </label>
                    <input type="email" name="email" placeholder="Enter email address" value= ""  required />
                </div>
                {/* <div className="column">
                    <div className="input-box">
                    <label>Password*</label>
                    <input type="text" name="password" placeholder="Password" value= ""  required />
                    </div>
                    <div className="input-box">
                    <label>Confirm Password*</label>
                    <input type="text" name="confirm-password" placeholder="Confirm Password" value= ""  required />
                    </div>
                </div>  */}
        
                <div className="column">
                    <div className="input-box">
                    <label>Phone Number</label>
                    <input type="number" placeholder="Enter phone number" required />
                    </div>
                    <div className="input-box">
                    <label>Birth Date</label>
                    <input type="date" placeholder="Enter birth date" required />
                    </div>
                </div>
                <div className="gender-box">
                    <h3>Gender</h3>
                    <div className="gender-option">
                    <div className="gender">
                        <input type="radio" id="check-male" name="gender"  />
                        <label for="check-male">Male</label>
                    </div>
                    <div className="gender">
                        <input type="radio" id="check-female" name="gender" />
                        <label for="check-female">Female</label>
                    </div>
                    <div className="gender">
                        <input type="radio" id="check-other" name="gender" />
                        <label for="check-other">Prefer not to say</label>
                    </div>
                    </div>
                </div>
                <div className="input-box address">
                    <label>Address</label>
                    <input type="text" placeholder="Enter street address" required />
                    <input type="text" placeholder="Enter street address line 2" required />
                    <div className="column">
                    <input type="text" placeholder="Enter your Country" required />
                    <input type="text" placeholder="Enter your city" required />
                    </div>
                    <div className="column">
                    <input type="text" placeholder="Enter your region" required />
                    <input type="number" placeholder="Enter postal code" required />
                    </div>
                </div>
                <div className="column">
                    <div className="input-box">
                    <label>Enter All Initiatives you are interested in:</label>
                    <input type="text" placeholder="Tree Planting, Clean Earth..." required />
                    </div>
                    
                </div>
                <button type="submit" name="submit">Submit</button>
            </form>
            </section>

        </div>
        </>
        
    );
}

export default Profile;