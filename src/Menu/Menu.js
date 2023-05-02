import React,{lazy,Suspense} from 'react'
import './Menu.css'
//import Home from '../Home'
//import About from '../About'
//import Contact from '../Contact'
import {HashRouter,Routes,Route,Navigate} from 'react-router-dom';
const Home = lazy(()=>import('../Home'))
const About = lazy(()=>import('../About'))           //this is lazy method writing
const Contact = lazy(()=>import('../Contact'))

const Menu = () => {
    const [myLeft, setMyLeft] = React.useState(-154)
    const [isMobileView, setIsMobileView] = React.useState(document.body.offsetWidth < 600 ? true:false)
    const [menuItem, setMenuItem] = React.useState('Home')
    
    let timeOutId;
    let flag = true;
    window.addEventListener('resize', (eve)=>{
        if(flag){
            fnHandResize();
            flag = false;
           }

        clearTimeout(timeOutId);
        timeOutId = setTimeout(function (){
            fnHandResize();
        },1000)
    })

    const fnHandResize=()=>{
        var _width = document.body.offsetWidth;
        setIsMobileView ( _width > 600 ? false:true)
    }

    const fnClick=(item)=>{
        setMenuItem (item)
        if(isMobileView){
            setMyLeft(-154)
        }
    }               

    const fnMobileBtnClick=()=>{
        setMyLeft (myLeft==0 ? -154:0)

    }
                  
        return <div> 
                 {isMobileView && <img src='mobilemenu.jfif'onClick={fnMobileBtnClick} class="mobileMenubtn"/>}
            <div style={{left:myLeft}} className={isMobileView ? 'mobileMenu':'menu'}>
                 <a href='#/home' className={menuItem =='Home' && 'menuActive'} onClick={()=> fnClick('Home')}>Home</a>
                 <a href='#/about' className={menuItem =='About' && 'menuActive'} onClick={()=> fnClick('About')}>About</a>
                 <a href='#/contact' className={menuItem =='Contact' && 'menuActive'} onClick={()=> fnClick('Contact')}>Contact</a>
            </div>  
            <HashRouter>
                <Suspense fallback="Loading...">
                   <Routes>
                      <Route path="/home" element={<Home/>}/>
                      <Route path="/about" element={<About/>}/>
                      <Route path="/contact" element={<Contact/>}/>
                      <Route path="*" element={<Navigate to='/home'/>}/>
                   </Routes>
                </Suspense>
            </HashRouter>
                             
               </div>
}

export default Menu