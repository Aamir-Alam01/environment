import React from "react";
import {MediaCard, ContainedButtons} from "./utility";


const initiatives = ()=>{
   return  (
   <>
   <div className="environment-cards">
   <h1>Environment Initiative Section</h1>
   <h4>Create Your Own Initiative below</h4>
   <span><ContainedButtons/></span>
    <div className="card-container">
        <div className="card-holder">
                 <MediaCard value="JOIN" title="Tree Plantation" path="tree.jpg" para="Planting trees enriches our environment, combats climate change, enhances biodiversity, and ensures a healthier planet for future generations. Let's plant today!"/>      
        </div>
        
        <div className="card-holder">
                <MediaCard value="JOIN" title="Tree Plantation" path="tree.jpg" para="Planting trees enriches our environment, combats climate change, enhances biodiversity, and ensures a healthier planet for future generations. Let's plant today!"/>
        </div>
        <div className="card-holder">
                <MediaCard value="JOIN" title="Tree Plantation" path="tree.jpg" para="Planting trees enriches our environment, combats climate change, enhances biodiversity, and ensures a healthier planet for future generations. Let's plant today!"/>      
        </div>
        <div className="card-holder">
                <MediaCard value="JOIN" title="Tree Plantation" path="tree.jpg" para="Planting trees enriches our environment, combats climate change, enhances biodiversity, and ensures a healthier planet for future generations. Let's plant today!"/>      
        </div>
        <div className="card-holder">
                <MediaCard value="JOIN" title="Tree Plantation" path="tree.jpg" para="Planting trees enriches our environment, combats climate change, enhances biodiversity, and ensures a healthier planet for future generations. Let's plant today!"/>      
        </div>
        <div className="card-holder">
                <MediaCard value="JOIN" title="Tree Plantation" path="tree.jpg" para="Planting trees enriches our environment, combats climate change, enhances biodiversity, and ensures a healthier planet for future generations. Let's plant today!"/>
        </div>
    </div>
   </div>
   </>
   
);
}

export default initiatives;