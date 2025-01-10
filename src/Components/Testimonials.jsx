import React, { useEffect, useRef, useState } from 'react'
import Arvato_Systems from "/assets/images/Arvato_Systems.webp";
import ClearwaterAnalytics from "/assets/images/ClearwaterAnalytics.webp";
import DHCS from "/assets/images/DHCS.webp";
import Doodle from "/assets/images/Doodle.webp";
import DropBox from "/assets/images/DropBox.webp";
import Endenred from "/assets/images/Endenred.webp";
import Kiva from "/assets/images/Kiva.webp";
import Lumen from "/assets/images/Lumen.webp";
import MercedesBenz from "/assets/images/MercedesBenz.webp";
import Roblox from "/assets/images/Roblox.webp";
import RoyalCaribbean from "/assets/images/RoyalCaribbean.webp";
import Software from "/assets/images/Software_AG.webp";
import SonyMusic from "/assets/images/SonyMusic.webp";
import TheVeryGroup from "/assets/images/TheVeryGroup.webp";


import ArvatoSvg from "/assets/images/Arvato.png";
import CarrabianSvg from "/assets/images/carrabian.png";
import ClearWaterSvg from "/assets/images/Cleanwater.png";
import DhcsSvg from "/assets/images/DHCS.png";
import DoodleSvg from "/assets/images/doodle.png";
import DropboxSvg from "/assets/images/dropbox.png";
import EnenRedSvg from "/assets/images/Edenred.png";
import KivaSvg from "/assets/images/Kiva.png";
import LumenSvg from "/assets/images/lumen.png";
import MercedesSvg from "/assets/images/mercedes.png";
import RobloxSvg from "/assets/images/roblox.png";
import SoftwareAg from "/assets/images/SoftwareAg.png";
import SonySvg from "/assets/images/sony.png";
import TheVeryGroupSvg from "/assets/images/ThheVeryGroup.png";






const testimonialElements = [
{company : "Mercedez-Benz" , comapnyType : "Large enterprise" ,testimony : "With Atlassian cloud, everything regarding server maintenance is done for us, and there’s less downtime and better performance.", testifyier : "Mehmet Sari", position : "Modern Collaboration Platform Team, Mercedes Benz",image : MercedesBenz , svgElemet : MercedesSvg },
{company : "Roblox" , comapnyType : "Enterprise" ,testimony : "For the two teams we've already migrated from Wrike to Jira, each of those will amount to $150,000/year in savings.",testifyier : "Joe Cotant", position : "Senior Technical Program Manager, Roblox", image : Roblox , svgElemet : RobloxSvg },
{company : "Royal Caribbean" , comapnyType : "Large enterprise" ,testimony : "By leveraging Jira and Confluence for automated reporting, we’re saving over 800 hours and $500k per year in management consulting costs.", testifyier : "Wais Mojaddidi", position : "Director of Agile Delivery, Global E-commerce, Royal Caribbean",image : RoyalCaribbean , svgElemet : CarrabianSvg },
{company : "Lumen" , comapnyType : "Enterprise" ,testimony : "We’ve been able to increase throughput by 200%, which means we’re delivering capabilities faster and increasing customer satisfaction.", testifyier : "Mai Lian Scarlett", position : "Former Senior Director, Agile Transformation Office, Lumen",image : Lumen , svgElemet : LumenSvg },
{company : "Doodle" , comapnyType : "Small medium business" ,testimony : "Jira Product Discovery translated our entire process into a highly transparent workflow. That was a mind-blowing moment.", testifyier : "Stephanie Leue", position : "Former Chief Product Officer, Doodle",image : Doodle , svgElemet : DoodleSvg },
{company : "DropBox" , comapnyType : "Enterprise" ,testimony : "The big win that we've seen through Confluence Cloud is definitely collaboration. It's a very open way of working.", testifyier : "Damien Davis", position : "Lead Atlassian Administrator, Dropbox",image : DropBox , svgElemet : DropboxSvg },
{company : "DHCS" , comapnyType : "Enterprise" ,testimony : "By tracking in Jira and our developer tools, we reduced the cost to get the team set up and deliver from $2.8 million to $600,000.", testifyier : "Ryan Mosley", position : "Chief of Factory & Engineering Modernization, DHCS",image : DHCS , svgElemet : DhcsSvg },
{company : "Sony Music Pubblishing" , comapnyType : "Enterprise" ,testimony : "Full visibility and tracking is at the fingertips of all agents and customers alike. That’s the most basic and wonderful gain.", testifyier : "Alison Wood", position : "Director, Global Copyright Administration, Sony Music Publishing",image : SonyMusic , svgElemet : SonySvg },
{company : "Clearwater Analytice" , comapnyType : "Enterprise" ,testimony : "“Security and compliance are really critical in the financial industry… Atlassian cloud met all of the needs that we have.", testifyier : "Erica Larson", position : "Process Engineer, Clearwater Analytics",image : ClearwaterAnalytics , svgElemet : ClearWaterSvg },
{company : "KIVA" , comapnyType : "Small medium Business" ,testimony : "We’re a global workforce, and Atlassian helps us stay in sync while doing async work. It’s been a big win for us.", testifyier : "Brit Heiring", position : "Director of Communications, Kiva",image : Kiva , svgElemet : KivaSvg },
{company : "Edenred" , comapnyType : "Enterprise" ,testimony : "For me, migrating to the cloud has allowed us to leave all the on-premise pains. It’s been a big relief.", testifyier : "Razvan Nechifor", position : "Jira Global Team Leader, Edenred",image : Endenred , svgElemet : EnenRedSvg },
{company : "Software AG" , comapnyType : "Small medium Business" ,testimony : "We trust Atlassian to take care of security, availability, and scalability, freeing up time for us to focus on more strategic topics.", testifyier : "Radoslav Danchev", position : "VP of Collaboration, Workplace, and Support, Software AG",image : Software , svgElemet : SoftwareAg },
{company : "The Very |Group" , comapnyType : "Enterprise" ,testimony : "We’ve been getting a 4.9/5 satisfaction score, which has been fantastic. With the previous solution, we had nothing but complaints.", testifyier : "Rob Crompton", position : "Head of Service Management, The Very Group",image : TheVeryGroup , svgElemet : TheVeryGroupSvg },
{company : "Arvato" , comapnyType : "Enterprise" ,testimony : "We really have end-to-end visibility and control over our workflow…so we can see how to improve the business.", testifyier : "Johannes Siebzehnrübl", position : "Chief Operating Officer of MultiCloud and Infrastructure, Arvato Systems",image : Arvato_Systems , svgElemet : ArvatoSvg }
]




const TestimonyButton = ({index,imageSource,testimonyIndex,setIndex}) =>{

    return(
        <button key={index}
        onClick={() => setIndex(index)}
        className={`${testimonyIndex === index ? "border-t-2 border-t-white opacity-100" : "border-none opacity-45"}` + ` object-cover object-center h-full md:min-w-48 min-w-28 pt-4  md:px-2 px-4 flex items-center justify-center`}>
        <img src={imageSource} className='object-cover object-center' />
    </button>
    )
}

const ArrowSvg = ({styles}) => {
    return(
        <svg viewBox="0 0 11 8" xmlns="http://www.w3.org/2000/svg" className={styles}>
        <path fillRule="evenodd" clipRule="evenodd"  
        d="M7.40796 0L6.32831 1.2021L8.07854 3.1497H0.763182C0.341906 3.1497 0 3.53038 0 3.99943C0 4.46849 0.341906 4.84917 0.763182 4.84917H8.07854L6.32831 6.7979L7.40796 8L11 3.99943L7.40796 0Z">
        </path></svg>
)}


const Testimonials = () => {


    const [testimonyIndex,setIndex] = useState(0);
    const selectTestimonyRef = useRef();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

useEffect(() =>{

    
  const isPhone = windowWidth <= 480;
  const isTablet = windowWidth > 480 && windowWidth <= 768;
  const isSmallLaptop = windowWidth > 768 && windowWidth <= 1024;
  const isLaptop = windowWidth > 1024 && windowWidth <= 1440;


if(isLaptop){
    if(testimonyIndex < 5 ) {
        selectTestimonyRef.current.scrollTo({
            left : -800,
            behavior: "smooth"
        })    
    }
    if(testimonyIndex >= 5 ) {
                selectTestimonyRef.current.scrollTo({
                    left : 800,
                    behavior: "smooth"
                })    
            }
    if(testimonyIndex >= 9 ) {
        selectTestimonyRef.current.scrollTo({
            left : 1600,
            behavior: "smooth"
        })}}

        
        
        
        //small lapptopp

    
if(isSmallLaptop){
    if(testimonyIndex < 2 ) {
        selectTestimonyRef.current.scrollTo({
            left : -600,
            behavior: "smooth"
        })    
    }
    if(testimonyIndex >= 3 ) {
                selectTestimonyRef.current.scrollTo({
                    left : 300,
                    behavior: "smooth"
                })    
            }
            if(testimonyIndex >= 5 ) {
                selectTestimonyRef.current.scrollTo({
                    left : 800,
                    behavior: "smooth"
                })    
            }
            if(testimonyIndex >= 7 ) {
                selectTestimonyRef.current.scrollTo({
                    left : 1200,
                    behavior: "smooth"
                })    
            }
            if(testimonyIndex >= 9 ) {
                selectTestimonyRef.current.scrollTo({
                    left : 1600,
                    behavior: "smooth"
                })    
            }
            if(testimonyIndex >= 11 ) {
                selectTestimonyRef.current.scrollTo({
                    left : 2000,
                    behavior: "smooth"
                })    
            }
}


//tablets
  
if(isTablet){
    if(testimonyIndex < 2 ) {
        selectTestimonyRef.current.scrollTo({
            left : -600,
            behavior: "smooth"
        })    
    }
    if(testimonyIndex >= 2 ) {
                selectTestimonyRef.current.scrollTo({
                    left : 300,
                    behavior: "smooth"
                })    
            }
            if(testimonyIndex >= 4 ) {
                selectTestimonyRef.current.scrollTo({
                    left : 700,
                    behavior: "smooth"
                })    
            }
            if(testimonyIndex >= 6 ) {
                selectTestimonyRef.current.scrollTo({
                    left : 1000,
                    behavior: "smooth"
                })    
            }
            if(testimonyIndex >= 8 ) {
                selectTestimonyRef.current.scrollTo({
                    left : 1400,
                    behavior: "smooth"
                })    
            }

            if(testimonyIndex >= 10 ) {
                selectTestimonyRef.current.scrollTo({
                    left : 1600,
                    behavior: "smooth"
                })    
            }
            if(testimonyIndex >= 11 ) {
                selectTestimonyRef.current.scrollTo({
                    left : 1900,
                    behavior: "smooth"
                })    
            }
}



//phones
if(isPhone){
   
   
    
    for (let index = 1; index < testimonialElements.length - 1; index++) {
    
        const phoneValue = testimonyIndex * 100

        if(testimonyIndex == 1){
            selectTestimonyRef.current.scrollTo({
                left : -200,
                behavior: "smooth"
            })     
        }
        if (testimonyIndex >= index) {
            selectTestimonyRef.current.scrollTo({
                left : phoneValue,
                behavior: "smooth"
            })  
        }
    }
}

},[testimonyIndex])


  return (
    <section className="flex w-screen  items-end justify-center relative">
        <div className="flex w-full lg:w-[90%] md:h-[30rem]
        h-[25rem]  bg-black testimonialClipPaths bottom-0 absolute
         -z-10">
   </div>
       
        <div className="flex w-full lg:w-[90%] flex-col  gap-8   items-start justify-start md:gap-12 md:px-16 p-4">
        
       
    <div className="w-full flex lg:justify-between lg:flex-row flex-col justify-center items-center md:gap-8 lg:gap-3 ">

                <div className="lg:w-[40%] w-[80%]">
                <img src={testimonialElements[testimonyIndex].image} className='max-w-full'/>
                </div>


                <div className="lg:w-[55%] w-full flex flex-col items-start justify-center gap-4 lg:gap-4">
                <h6 className="uppercase md:text-sm text-xs text-white font-charlieText">
                    {testimonialElements[testimonyIndex].comapnyType}
                </h6>
                <p className="lg:text-2xl text-sm max-w-[90%]  text-white font-charlieText">
                 "{testimonialElements[testimonyIndex].testimony}"
                </p>

                <div className="flex flex-col gap-1 mt-2 items-start-justify-start">
                <h4 className="uppercase md:text-sm text-xs text-white font-charlieDisplay">
                    {testimonialElements[testimonyIndex].testifyier}
                </h4>
             
                <h6 className="uppercase md:text-sm text-xs text-white font-charlieText">
                    {testimonialElements[testimonyIndex].position}
                </h6>
                </div>


                <button className="flex items-center justify-center gap-2 text-white fill-white group">
                    <p className="md:text-lg text-sm font-charlieDisplay group-hover:text-[#1868DB]">
                    Read {testimonialElements[testimonyIndex].company}'s case study
                    </p>
                        <ArrowSvg styles='w-3 transition-all duration-250 group-hover:translate-x-2  group-hover:fill-[#1868DB]'/>
                </button>
                </div>
            </div>




<div ref={selectTestimonyRef}
className="w-full flex md:h-20 items-start justify-start overflow-hidden border-t border-t-[#727272]">

{

testimonialElements.map((element,index) =>(
<TestimonyButton imageSource={element.svgElemet} index={index} key={index} testimonyIndex={testimonyIndex} setIndex={setIndex}  />

))
}



</div>

    </div>

    </section>
  )
}

export default Testimonials