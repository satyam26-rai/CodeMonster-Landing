import React from "react";
import './Reasons.css';
import image1 from "../../assets/image1.svg"
import image2 from "../../assets/image2.svg"
import image3 from "../../assets/image3.svg"
import image4 from "../../assets/image4.svg"
  
import tick from "../../assets/tick.png"
const Reasons=()=>{
    return(
         <div className="Reasons" id="reasons">
            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3}alt="" />
                <img src={image4}alt="" />
            </div>
            <div className="right-r"> 
            <span>some reasons</span>

            <div>
                <span className="troke-text">why   </span>
                <span>choose us?</span>
            </div>
            
           <div className="details-r"> 
                  <div>
                  <img src={tick} alt=""></img>
                  <span>FIRST PLATFORM WHICH PROVIDE BOTH COMPETITIVE CODING AND LERANING ALSO</span>
                  </div>
                  <div>
                  <img src={tick} alt="" />
                  <span>MORE THAN 500 LECTURES ARE AVAILABLE  </span>
                  </div>
                  <div>
                  <img src={tick} alt="" />
                  <span>EVOLVE YOU FROM BASIC TO MOMN$TER LEVEL</span>
                  </div>
                  <div>
                  <img src={tick} alt="" />
                  <span>BEST FACULTY</span>
                  </div>
                  </div>
                                         

                  
  
            </div> 
         </div>
    );
};
export default Reasons