import { Routes,Route } from 'react-router-dom';
import './App.css';
import Testimonial from './assets/Testimonials/Testimonial';
import Footer from './components/Footer/Footer';
 import Heros from './components/Hero/Hero';
 

 
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
 
 function App(){
  return(
    <div className="App">
          
      <Heros/>
      <Programs/>
      <Reasons/>
      <Plans/>
      <Testimonial/>
       
      <Footer/>
       
    </div>
    
  );
 }
 export default App;