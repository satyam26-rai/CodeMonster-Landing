 import React,{useState} from 'react'
 import './Header.css'
 import Logo from '../../assets/logo1.png'
 import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll';
 const Header=()=>{
    const mobile =window.innerWidth<=768?true:false;
    const [menuOpened, setMenuOpened] = useState(false)

    return(
        <   div class ="header">
            <img src={Logo} alt="" class ="logo"/>
            {(menuOpened===false&&mobile===true)?(
                <div
                style={{backgroundColor :"var(--appcolor)",padding:'0.5rem',borderRadius:"5px"}}

                onclick={()=>setMenuOpened(true)}
                 >
                <img src={Bars} alt="" style={{width:'1.5rem',height:'1.5rem'}}/>
                </div>
            
            ):(<ul class="header-menu">
                <li>
                    <Link onclick={()=>setMenuOpened(false)} 
                    activeClass="active"
                    to='header'
                    span={true}
                    smooth={true}
                    >Home</Link>
                </li>
                <li>
                    <Link onclick={()=>setMenuOpened(false)} 
                    to='programs'
                    span={true}
                    smooth={true}
                    >Programs</Link>
                </li> 
                  <li>
                    <Link onclick={()=>setMenuOpened(false)} 
                    to='Reasons'
                    span={true}
                    smooth={true}
                    >Why us</Link>
                </li>
                <li>
                    <Link onclick={()=>setMenuOpened(false)} 
                    to='plan-container'
                    span={true}
                    smooth={true}
                    >Plans</Link>
                </li>
                <li>
                    <Link onclick={()=>setMenuOpened(false)} 
                    to='testimonial'
                    span={true}
                    smooth={true}
                    >Testimonial</Link>
                </li>
        </ul> 
        )}   
        </div>
    )
 }
 export default Header