import React from "react";

const actionForm = ()=>{
    return(
        <>
        <div className="parent-container">
            <h1 className="">Action Entry</h1>
            <p>Your Actions can revolutionize the world !</p>
            <section class="container">
                <header>Fill The Form Below</header>
                <form action="" class="form" method="POST">
                <div class="input-box">
                    <label>Actions </label>
                    <input type="text" name="name" placeholder="Like Tree Planted" value="" required />
                </div>
                <div class="input-box">
                    <label>Date of Action</label>
                    <input type="date" placeholder="Enter birth date" required />
                    </div>

        
                <div class="column">
                    <div class="input-box">
                        <label>Mode of Transportation</label>
                        <input type="text" placeholder="Bike, Cycle, Bus..." required />
                    </div>
                </div>

                <div class="column">
                    <div class="input-box">
                        <label>Items Recycled</label>
                        <input type="text" placeholder="Plastic, Glass..." required />
                    </div>
                   
                </div>
                <div class="select-box">
                        <select>
                            <option hidden>Frequency</option>
                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>

                <div class="input-box">
                        <label>Distance Travelled</label>
                        <input type="text" placeholder="In KMs" required />
                </div>
                <div class="input-box address">
                    <label>Action Description</label>
                    <input type="text" placeholder="Today I watered plants..." required />
                    {/* <div class="column">
                    <input type="text" placeholder="Enter your Country" required />
                    <input type="text" placeholder="Enter your city" required />
                    </div>
                    <div class="column">
                    <input type="text" placeholder="Enter your region" required />
                    <input type="number" placeholder="Enter postal code" required />
                    </div> */}
                </div>
                <button type="submit" name="submit">Submit</button>
            </form>
            </section>

        </div>
        </>
    )
}

export default actionForm;