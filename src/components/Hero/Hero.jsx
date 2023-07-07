import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from "../../assets/hero_image.svg";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
 import Calories from "../../assets/calories.png";
 import NumberCounter from 'number-counter'; 
import {motion} from 'framer-motion';
 import { useNavigate } from 'react-router-dom';

const Heros = () => {
  // const navigate =useNavigate();

  const goToLogin=()=>{
    alert("hiii");
  }
 

  const transition ={type:'Spring',duration:3}
  const mobile =window.innerWidth<=768 ? true:false;
return(
<div className="hero" id='home'>
   
  <div className="blur hero-blur"></div>
<div className="left-h">
      <Header/>
      <div class="the-best-ad">
        <motion.div
        initial={{left: mobile?"178px":"230px" }}
        whileInView={{left:"8px"}}
        transition={{...transition,type:'tween'}}
        ></motion.div>
        <span> the best platform for coding Knowledge </span>
      </div>
      <div class ="hero-text">
        <div>
            <span class="troke-text">Grab </span>
            <span>Your</span>
        </div>
        <div>
            <span>Ideal Package</span>
        </div>
        <div> 
          <span>In here we will help you to  build idealogy and logic to solve the coding problem  </span>
        </div>

      </div>

      {/* //figures */}
      <div class='figures'>
        <div>
          <span>
            <NumberCounter end ={500} start={400} delay='4' preFix="+" />
          </span>
          <span>Lectures</span>
        </div>
        <div>
          <span>
          <NumberCounter end ={2000} start={1980} delay='4' preFix="+" />
          </span>
          <span>members joined</span>
        </div>
        <div>
          <span>
          <NumberCounter end ={50} start={0} delay='4' preFix="+" />
          </span>
          <span>programs</span>
        </div>
      </div>
      {/* herobuttons */}
      <div class='hero-buttons'>
        <button class='btn'>Get Started</button>
        <button class='btn'> learn More</button>
      </div>
</div> 
<div className="right-h">
  <button class="btn"onClick={()=>goToLogin()} >Join Now</button>
   

  {/* <motion.div 
  initial={{right:"-1rem"}}
  whileInView={{right:"4rem"}}
  transition={transition}  
  class="heart-rate">
    <img src={Heart}alt="" />
    <span>Heart Rate</span>
    <span>116 bpm</span>
  </motion.div> */}


{/* hero image */}
<img src={hero_image} alt="" class='hero-image'/>
<motion.img 
initial={{right:"11rem"}}
whileInView ={{right:'25rem'}}
transition={transition}
src={hero_image_back} alt="" class='hero_image_back' />
{/* calories  */}



{/* <motion.div 
initial={{right:"15rem"}}
whileInView={{right:"38rem"}}
class='calories'>
  <img src={Calories} alt="" />
   <div>
   <span>Calories Burned</span>
  <span>220 Kcal</span>
   </div>
</motion.div> */}

 


</div>
</div>
);
};
export default Heros