import React from "react";
import {ContainedButtons, MediaCard} from './utility';

const communityPost = ()=>{
    return  (
        <>
        <div className="environment-cards">
        <h1>Community Posts</h1>
        <h4>Create Your Post</h4>
        <span><ContainedButtons/></span>
         <div className="card-container">
             <div className="card-holder">
                     <MediaCard value="Comment" title="Today I saved Plants" para="I Planted 2 plants in my garden and in open area of Locality" path="tree.jpg"/>
             </div>
             
             <div className="card-holder">
                <MediaCard value="Comment" title="Today I saved Plants" para="I Planted 2 plants in my garden and in open area of Locality" path="tree.jpg"/>      
             </div>
             <div className="card-holder">
                <MediaCard value="Comment" title="Today I saved Plants" para="I Planted 2 plants in my garden and in open area of Locality" path="tree.jpg"/>      
             </div>
             <div className="card-holder">
                <MediaCard value="Comment" title="Today I saved Plants" para="I Planted 2 plants in my garden and in open area of Locality" path="tree.jpg"/>
             </div>
             <div className="card-holder">
                <MediaCard value="Comment" title="Today I saved Plants" para="I Planted 2 plants in my garden and in open area of Locality" path="tree.jpg"/>
             </div>
             <div className="card-holder">
                <MediaCard value="Comment" title="Today I saved Plants" para="I Planted 2 plants in my garden and in open area of Locality" path="tree.jpg"/>
             </div>
         </div>
        </div>
        </>
        
     );
}

export default communityPost;