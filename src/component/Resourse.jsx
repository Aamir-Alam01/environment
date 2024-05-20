import React from "react";
import { ResourceCard } from "./utility";
// import Blog from "../blog/Blog";

const resourses = ()=>{
    return (
        <>
        {/* <Blog/> */}
        <div className="resourse-container">
            <div className="r-box">
                <h1>Resources For Reference</h1>
            </div>

            <div className="article">
                <h3>Articles</h3>
            </div>
            <div className="article-holder">
                <div className="ar-box">
                    <ResourceCard title="Need of tree plantation" path="deforestation.png" link="https://zhl.org.in/blog/importance-of-tree-plantation/#:~:text=They%20take%20in%20carbon%20dioxide,animals%20and%20birds%20as%20well." para="Deforestation became a major problem for increasing global warming rate. Trees play an extremely important part in regulating the temperature and making the weather conditions... "/>    
                </div>
                <div className="ar-box">
                    <ResourceCard title="Industrial air pollution" path="industry.png" link="https://www.devic-earth.com/blog/what-is-industrial-air-pollution-how-does-it-affect-the-township-residents#:~:text=Industrial%20air%20pollution%20is%20when,acid%20rain%20and%20climate%20change." para="Industrial air pollution is when factories, mines, and transportation release harmful substances into the air. These pollutants can cause health problems such as respiratory diseases, cancers, decreased lung function, and asthma..."/>    
                </div>
                <div className="ar-box">
                    <ResourceCard title="Rain Water Harvesting Tips" path="rain.png" link="https://www.treehugger.com/beginners-guide-to-rainwater-harvesting-5089884" para="Rainwater harvesting is the practice of collecting and storing rain for reuse, rather than letting the water run off and be absorbed into the ground or channeled into drains, streams, or rivers. It is one of the easiest..."/>    
                </div>
                <div className="ar-box">
                    <ResourceCard title="7 Tips to Recyle Better" path="recyle-home.png" link="https://www.earthday.org/7-tips-to-recycle-better/" para="Grocery bags dissolve into potentially harmful microplastics and, in the case of ingestion or entanglement, hurt and kill animals. They’re pretty much the worst. Even though these bags are technically..."/>    
                </div>
                <div className="ar-box">
                    <ResourceCard title="9 Steps to Plant a Tree" path="tree.jpg" link="https://www.myplantmytaste.com/9-steps-to-plant-a-tree/" para="A tree is a tall plant with a trunk and branches made of wood. Trees can live for many years. The oldest tree ever discovered is approximately 5,000 years old. The four main parts of a tree are the roots... "/>    
                </div>
                <div className="ar-box">
                    <ResourceCard title="Stop Global Warming" path="global.png" link="https://www.nrdc.org/stories/how-you-can-stop-global-warming" para="Rising sea levels. Raging storms. Searing heat. Ferocious fires. Severe drought. Punishing floods. The effects of climate change are already threatening our health, our communities, our economy, our security, and our children’s future."/>    
                </div>
            </div>

            <div className="article">
                <h3>YouTube Videos</h3>
            </div>
            <div className="links-holder">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SJfpnGEMrKM?si=K1nISVXKMmgAKgnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_NL1GtOyBxI?si=VuumE8nwkjK-qOqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
        </>
    );
}

export default resourses;