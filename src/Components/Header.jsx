import React, { useState } from 'react'
import { ProductsCard, ResourcesCard, TeamsCard, WhyCard } from './NavPopUps'


const SvgElement =({isRotated})=>{
    return(  
    <svg xmlns="http://www.w3.org/2000/svg" 
    width="11" height="6" viewBox="0 0 11 6" fill="none" 
    className={ isRotated ?   "stroke-altasianBlue" : "rotate-180 stroke-black"}>
  <path d="M1.19922 4.81824L5.19922 1.18187L9.19922 4.81824"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
    )
}
    
const AltasionLogoText =() =>{
  return(
    <a href="#" className='flex items-center justify-center'>
    <svg xmlns="http://www.w3.org/2000/svg" 
      className='w-[12rem]'
       viewBox="0 0 156 20" 
      fill="none"><g id="Container">
      <path d="M97.7501 14.46C97.7501 11.7182 96.2781 10.4194 92.1799 9.52476C89.8999 9.03412 89.3515 8.51462 89.3515 7.7931C89.3515 6.89841 90.1596 6.49436 91.6604 6.49436C93.4786 6.49436 95.268 7.04271 96.9708 7.82196V4.21434C95.7875 3.60826 93.9404 3.14648 91.7758 3.14648C87.7064 3.14648 85.5996 4.907 85.5996 7.82196C85.5996 10.1308 86.6674 11.9779 90.8811 12.786C93.3921 13.3055 93.9116 13.7096 93.9116 14.5466C93.9116 15.3547 93.3921 15.8742 91.6027 15.8742C89.5535 15.8742 87.1004 15.1815 85.513 14.2291V18.0099C86.7829 18.6448 88.4568 19.3375 91.5738 19.3375C95.9895 19.3375 97.7501 17.3749 97.7501 14.46Z" fill="#1868DB"> </path>
      <path d="M142.139 3.37741V19.1066H145.487V7.12934L146.901 10.304L151.634 19.1066H155.848V3.37741H152.5V13.5365L151.23 10.5927L147.421 3.37741H142.139Z" fill="#1868DB"></path>
      <path d="M120.869 3.37741H117.204V19.0778H120.869V3.37741Z" fill="#1868DB"></path><path d="M112.96 14.46C112.96 11.7182 111.488 10.4194 107.39 9.52476C105.11 9.03412 104.561 8.51462 104.561 7.7931C104.561 6.89841 105.369 6.49436 106.87 6.49436C108.688 6.49436 110.478 7.04271 112.181 7.82196V4.21434C110.997 3.60826 109.15 3.14648 106.986 3.14648C102.916 3.14648 100.809 4.907 100.809 7.82196C100.809 10.1308 101.877 11.9779 106.091 12.786C108.602 13.3055 109.121 13.7096 109.121 14.5466C109.121 15.3547 108.602 15.8742 106.812 15.8742C104.763 15.8742 102.31 15.1815 100.723 14.2291V18.0099C101.993 18.6448 103.667 19.3375 106.784 19.3375C111.228 19.3375 112.96 17.3749 112.96 14.46Z" fill="#1868DB"></path>
      <path d="M57.2012 3.37741V19.1066H64.705L65.8883 15.701H60.8665V3.37741H57.2012Z" fill="#1868DB"></path><path d="M42.3381 3.37753V6.78312H46.4075V19.1068H50.0729V6.78312H54.4309V3.37753H42.3381Z" fill="#1868DB"></path><path d="M36.9987 3.37731H32.1789L26.6953 19.1065H30.8802L31.6594 16.4513C32.5829 16.7111 33.5642 16.8842 34.6032 16.8842C35.6133 16.8842 36.5946 16.7399 37.547 16.4513L38.3263 19.1065H42.5111L36.9987 3.37731ZM34.5744 13.623C33.8817 13.623 33.189 13.5075 32.5541 13.3343L34.5744 6.46544L36.5946 13.3343C35.9597 13.5075 35.2959 13.623 34.5744 13.623Z" fill="#1868DB"></path>
      <path d="M77.6921 3.37738H72.8723L67.3888 19.0777H71.5736L72.3528 16.4225C73.2764 16.6823 74.2577 16.8554 75.2967 16.8554C76.3068 16.8554 77.2881 16.7111 78.2405 16.4225L79.0197 19.0777H83.2046L77.6921 3.37738ZM75.2678 13.623C74.5751 13.623 73.8825 13.5076 73.2475 13.3344L75.2678 6.4655L77.2881 13.3344C76.6531 13.5076 75.9605 13.623 75.2678 13.623Z" fill="#1868DB"></path><path d="M134.029 3.37738H129.209L123.725 19.0777H127.91L128.69 16.4225C129.613 16.6823 130.594 16.8554 131.633 16.8554C132.643 16.8554 133.625 16.7111 134.577 16.4225L135.356 19.0777H139.541L134.029 3.37738ZM131.633 13.623C130.941 13.623 130.248 13.5076 129.613 13.3344L131.633 6.4655L133.654 13.3344C132.99 13.5076 132.326 13.623 131.633 13.623Z" fill="#1868DB"></path>
      <path d="M5.68241 8.83154C5.3938 8.51407 4.96089 8.54293 4.75886 8.91813L0.0545261 18.2979C-0.11864 18.6731 0.141109 19.106 0.545162 19.106H7.06774C7.26977 19.106 7.47179 18.9906 7.55838 18.7886C9.00143 15.8736 8.1356 11.4579 5.68241 8.83154Z" fill="#1868DB"></path><path d="M9.11676 0.288996C6.49041 4.44497 6.66357 9.03387 8.39523 12.4972C10.1269 15.9605 11.4545 18.5868 11.5411 18.7889C11.6277 18.9909 11.8297 19.1063 12.0317 19.1063H18.5543C18.9583 19.1063 19.247 18.6734 19.0449 18.2982C19.0449 18.2982 10.2712 0.750771 10.0403 0.317857C9.86714 -0.0861967 9.3765 -0.115058 9.11676 0.288996Z" 
      fill="#1868DB"></path></g></svg>
    </a>

  )
}

const HamburgerSvg = () =>{
  return(
    <div className='flex flex-col gap-1 lg:hidden'>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="4" viewBox="0 0 25 4" fill="none">
      <path d="M2 2H23" stroke="black" strokeWidth="3" strokeLinecap="round"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="4" viewBox="0 0 25 4" fill="none">
      <path d="M2 2H23" stroke="black" strokeWidth="3" strokeLinecap="round"></path></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="4" viewBox="0 0 25 4" fill="none">
      <path d="M2 2H23" stroke="black" strokeWidth="3" strokeLinecap="round">
      </path></svg>
      </div>
  )
}
const SearchAndSignIn  = () =>{
  return(
<div className="flex items-center gap-3 justify-start text-altasianBlue">
  
  
  <button className='px-4 border-r hidden md:flex'>
  <svg width="23" height="25" viewBox="0 0 23 25" fill="none" 
  xmlns="http://www.w3.org/2000/svg">
    <path d="M17.0918 18.5623L20.2497 21.7201" 
    stroke="#101214" strokeWidth="2.75" strokeLinecap="round"></path>
    <path d="M10.8417 19.1316C15.289 19.1316 18.8943 15.5263 18.8943 11.079C18.8943 6.63165 15.289 3.02637 10.8417 3.02637C6.39435 3.02637 2.78906 6.63165 2.78906 11.079C2.78906 15.5263 6.39435 19.1316 10.8417 19.1316Z" 
  stroke="#101214" strokeWidth="2.25"></path>
  </svg>
      </button>

      <button className=' font-medium hidden text-sm md:flex'>Sign in</button>

      <HamburgerSvg/>
      </div>
  )
}

const Header = () => {

const [isProductOpen,setProduct] = useState(false);
const [isTeamsOpen,setTeams] = useState(false);
const [isAtlasianOpen,setAtlasian] = useState(false);
const [isResourcesOpen,setResources] = useState(false);


const productOpen = ()=>{
  setProduct(true);
  setTeams(false);
  setAtlasian(false);
  setResources(false);
  }

const teamOpen = ()=>{
  setTeams(true);
  setProduct(false);
  setAtlasian(false);
  setResources(false);
  }

    
  const atlasianOpen = ()=>{
    setAtlasian(true);
    setTeams(false);
    setProduct(false);
    setResources(false);
    }
  

    const resourcesOpen = ()=>{
      setResources(true);
      setTeams(false);
      setProduct(false);
      setAtlasian(false);
      }

  const setElementsClose  = ()=>{
    setTeams(false);
    setProduct(false);
    setAtlasian(false);
    setResources(false);
    }
    

      
  return (
    <header className="fixed top-0 p-6 z-40
     bg-white  flex justify-start items-center w-screen">
<div className="flex items-center justify-between w-[90vw]">
   
<nav className="flex items-center w-[80%] justify-between gap-6">
    
  <AltasionLogoText/>

  <ul className='hidden lg:flex lg:gap-6 items-center justify-center'>
  
   <li onClick={setElementsClose}  onMouseEnter={productOpen} className='flex items-center justify-center gap-2 p-2'>
      <a className='flex items-center justify-center gap-4' href="#"><p className= { 'font-normal ' + `${isProductOpen?  "text-altasianBlue" : "text-black" }`}>Products</p>
{isProductOpen ? 
(
<>
<ProductsCard setElementsClose={setElementsClose}/>
<SvgElement isRotated={true}/>
</>
)
:
<SvgElement isRotated={false}/>
}

      </a>
  </li>
   <li onClick={setElementsClose}  onMouseEnter={teamOpen} className='flex items-center justify-center gap-2 p-2'>
      <a  className='flex items-center justify-center gap-4' href="#"><p className={ 'font-normal ' +  `${isTeamsOpen?  "text-altasianBlue" : "text-black" }`}>Teams</p>
      {isTeamsOpen ? 
(
<>
<TeamsCard setElementsClose={setElementsClose}/>
<SvgElement isRotated={true}/>
</>
)
:
<SvgElement isRotated={false}/>
}

      </a>
  </li>

   <li onClick={setElementsClose}  onMouseEnter={atlasianOpen} className='flex items-center justify-center gap-2 p-2'>
     <a  className='flex items-center justify-center gap-4' href="#"><p className={ 'font-normal ' +`${ isAtlasianOpen?  "text-altasianBlue" : "text-black" }`}>Why Altassian?</p>

     {isAtlasianOpen ? 
(
<>
<WhyCard setElementsClose={setElementsClose}/>
<SvgElement isRotated={true}/>
</>
)
:
<SvgElement isRotated={false}/>
}
 </a>  
  </li>
 

  <li onClick={setElementsClose}  onMouseEnter={resourcesOpen} className='flex items-center justify-center gap-2 p-2'>

  <a  className='flex items-center justify-center gap-4' href="#"><p className={ 'font-normal ' +  `${isResourcesOpen ?  "text-altasianBlue" : "text-black" }`}>Resources</p>  
   {isResourcesOpen ? 
(
<>
<ResourcesCard setElementsClose={setElementsClose}/>
<SvgElement isRotated={true}/>
</>
)
:
<SvgElement isRotated={false}/>
}   
  
   </a>
  </li>
  

   <li className='flex items-center justify-center gap-2 p-2'>
      <a  className='flex items-center justify-center gap-4 font-normal' href="#">Entreprice</a></li>
  </ul>


</nav>

<SearchAndSignIn/>
</div>
    </header>
)
}

export default Header