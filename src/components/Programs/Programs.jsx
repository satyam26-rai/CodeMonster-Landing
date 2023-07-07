import React from "react";
import './Programs.css';
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs=()=>{
    return(
         <div class='Programs' id='programs'>
            {/* Header */}
            <div className="programs-header">
                <span className="troke-text">Expolre our</span>
                <span>Programs</span>
                <span className="troke-text">to learn</span>
                
            </div>
            <div className="program-categories">
                {programsData.map((program)=>(
                    <div className="category">
                         {program.image}
                         <span>{program.heading}</span> 
                         <span>{program.details}</span>
                         <div className="join-now"><span>Join Now</span><img src={RightArrow} alt="" /></div>
                    </div>
                ))}
            </div>
         </div>
    );
};
export default Programs