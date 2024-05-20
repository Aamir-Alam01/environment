import React from "react";


const ViewProfile = ()=>{
    return (
        <>
        <div className="parent-container">
            <section class="container">
                <header>User Details</header>
                <form action="" class="form" method="POST">
                <div class="input-box">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter Your Name" value="" required readOnly/>
                </div>
        
                <div class="input-box">
                    <label>Email </label>
                    <input type="email" name="email" placeholder="Enter email address" value= ""  required readOnly/>
                </div>
                {/* <div class="column">
                    <div class="input-box">
                    <label>Password*</label>
                    <input type="text" name="password" placeholder="Password" value= ""  required />
                    </div>
                    <div class="input-box">
                    <label>Confirm Password*</label>
                    <input type="text" name="confirm-password" placeholder="Confirm Password" value= ""  required />
                    </div>
                </div>  */}
        
                <div class="column">
                    <div class="input-box">
                    <label>Phone Number</label>
                    <input type="number" placeholder="Enter phone number" required readOnly/>
                    </div>
                    <div class="input-box">
                    <label>Birth Date</label>
                    <input type="date" placeholder="Enter birth date" required readOnly/>
                    </div>
                </div>
                <div class="gender-box">
                    <h3>Gender</h3>
                    <div class="gender-option">
                    <div class="gender">
                        <input type="radio" id="check-male" name="gender" checked readOnly/>
                        <label for="check-male">male</label>
                    </div>
                    <div class="gender">
                        <input type="radio" id="check-female" name="gender" readOnly/>
                        <label for="check-female">Female</label>
                    </div>
                    <div class="gender">
                        <input type="radio" id="check-other" name="gender" readOnly/>
                        <label for="check-other">Prefer not to say</label>
                    </div>
                    </div>
                </div>
                <div class="input-box address">
                    <label>Address</label>
                    <input type="text" placeholder="Enter street address" required readOnly/>
                    <input type="text" placeholder="Enter street address line 2" required readOnly/>
                    <div class="column">
                    <input type="text" placeholder="Enter your Country" required readOnly/>
                    <input type="text" placeholder="Enter your city" required readOnly/>
                    </div>
                    <div class="column">
                    <input type="text" placeholder="Enter your region" required readOnly/>
                    <input type="number" placeholder="Enter postal code" required readOnly/>
                    </div>
                </div>
                <button type="submit" name="submit">Submit</button>
            </form>
            </section>

        </div>
        </>
        
    );
}

export default ViewProfile;