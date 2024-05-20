import React from "react";
import {ContainedButtons, MediaCard} from './utility';


const challenge = ()=>{
    return  (
        <>
        <div className="environment-cards">
        <h1>Challenges</h1>

         <div className="card-container">
             <div className="card-holder">
                     <MediaCard value="Accept" title="The Tree Saver" para="Plant Atleast 2 plants in your garden or open area of Locality" path="tree.jpg"/>
             </div>
             
             <div className="card-holder">
                     <MediaCard value="Accept" title="The Recyler" para="Recyle Atleast 2 items of Plastic and Glass in your house or locality" path="recyle.png"/>
             </div>
             <div className="card-holder">
                     <MediaCard value="Accept" title="The Tree Waterer" para="Water Atleast 2 plants in your garden or open area of Locality" path="water.png"/>
             </div>
             <div className="card-holder">
                     <MediaCard value="Accept"  title="The Feeder" para="Feed 2 or more homeless hungry people in your area of locality"  path="food.png"/>
             </div>
             <div className="card-holder">
                     <MediaCard value="Accept"  title="The Earth Saver" para="Throw and sort garbage in Dustbin and Clean your locality today"  path="garbage.png"/>
             </div>
             <div className="card-holder">
                     <MediaCard value="Accept"  title="The Donar" para="Donate your blood to a local Blood Bank of Locality for better future"  path="blood.png"/>
             </div>
         </div>
        </div>
        </>
        
     );
}

export default challenge;