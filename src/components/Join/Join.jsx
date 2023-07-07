 import React,{useRef} from "react";
import './Join.css';
import emailjs from "@emailjs/browser";
 
const Join =() =>{
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
     
        emailjs.sendForm('service_6elkgq2', ' template_2d7kndc ', form.current, '-_erSNXsUxZMCc49J')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
    return(
        <div className="Join" id="join-us">
            <div className="left-j">
                <hr />
                <div>
                    <span className="troke-text">READY TO</span>
                    <span> LEVEL UP</span>
                </div>
                <div>
                    <span> YOUR BODY</span>
                    <span className="troke-text"> WITH US</span>
                </div>
            </div>
            <div className="right-j">
                <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                    <input type="text" name="user_email" placeholder="Enter your Email address" />
                    <button className="btn btn-j">Join Now</button>

                </form>
            </div>
        </div>
    )
}
export default Join;