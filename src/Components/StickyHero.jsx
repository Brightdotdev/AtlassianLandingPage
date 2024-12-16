import React, { useEffect, useState } from 'react'
import firstHeroVideo from "/assets/videos/firstHeroVideo.mp4"
import secondHeroVideo from "/assets/videos/secondHeroVideo.mp4"
import thirdHeroVideo from "/assets/videos/thirdHeroVideo.mp4"
import fourthHeroVideo from "/assets/videos/fourthHeroVideo.mp4"
import fifthHeroVideo from "/assets/videos/fifthHeroVideo.mp4"
import { StickySVGFive, StickySVGFour, StickySVGOne, StickySVGThree, StickySVGTwo ,FirstDivSvg,SecondDivSvg, BigSvgIcon, MediumvgIcon, SmallSvgIcon, ThirdDivSvg, FourthDivSvg, FifthDivSvg  } from './UtitlityElements'
import { StickyElementView,} from './NavPopUps'




const stickyElements = [
    {
        divELements : {
        id : 0,
        title : "Dream it, Plan it, Launch it",
        paragraph : "The #1 tool for agile teams is now for all teams. Plan, track, and deliver your biggest ideas together.",
        svgElement : <FirstDivSvg/>,
            buttonText : "Explore Jira",
    } ,
   className : "stickyFirstClipPath", video : firstHeroVideo, SvgElement  : <StickySVGOne/>},

    {divELements : {
        id : 1,
        title : "Scale your knowledge",
        paragraph : "Connect and consolidate scattered docs and disconnected teammates in one, central source of truth.",
        svgElement : <SecondDivSvg/>,
            buttonText : "Explore Confluence",
    },
    className : "stickySecondClipPath",    video : secondHeroVideo, SvgElement  : <StickySVGTwo/>},

    {divELements : {
        id : 2,
        title : "Deliver service faster",
        paragraph : "CConnect Dev and Ops teams on a single platform with customizable features and AI-powered agents.",
        svgElement : <ThirdDivSvg/>,
            buttonText : "Explore Jira Service Management",
    },
        
    className : "stickyThirdClipPath",    video : thirdHeroVideo, SvgElement  : <StickySVGThree/>},
    {divELements : {
        id : 3,
        title : "Record, share, collaborate",
        paragraph : "Easily record and share AI-powered video messages to reach a broader audience for better async collaboration.",
        svgElement : <FourthDivSvg/>,
            buttonText : "Explore Loom",
    },
        
     className : "stickyFourthClipPath",   video : fourthHeroVideo, SvgElement  : <StickySVGFour/>},
    {
        divELements : {
            id : 4,
            title : "Ideate faster than ever",
            paragraph : "Capture and prioritize ideas and align everyone with product roadmaps - all in one single Jira platform",
            svgElement : <FifthDivSvg/>,
                buttonText : "Explore Jira Product Discovery",
        },
     className : "stickyFifthClipPath",  video : fifthHeroVideo, SvgElement  : <StickySVGFive/>}
]




const HeroText = () =>{
   return(
    
    <div className="flex items-start row-start-1 row-end-1
    sticky lg:top-20 xl:top-16 z-30 h-[6rem]
    bg-white
      col-span-9 w-full py-8">
          <h1 className="relative text-4xl font-charlieDisplay">
    Teamwork solutions for high-performing teams
  </h1>
  <SmallSvgIcon/>
  <MediumvgIcon/>
  <BigSvgIcon/>
    </div>
)
}

const LargeSection = ({scrollIndex}) =>{
   
    const currentVideo = stickyElements[scrollIndex].video 
 
    
    
    return(
        <div className="lg:col-span-6 lg:col-start-4 lg:row-span-5 lg:row-start-2 lg:row-end-5
    lg:sticky lg:top-[10rem] relative
        flex flex-col items-center justify-center">


<div className="absolute lg:bottom-12 lg:left-8 z-10  left-0 bottom-0">
    {stickyElements[scrollIndex].SvgElement}
</div>
            <div className="lg:w-[75%] lg:h-[75%] w-[90%] z-10 relative flex items-center justify-center">
                    <video className='max-w-full' src={currentVideo}
                      autoPlay
                      loop
                      muted
                    />
                </div>
                <div className={"flex absolute items-center w-full h-[110%] md:h-[20rem]  lg:w-[80%] lg:h-[80%] " +  stickyElements[scrollIndex].className} >
            </div>
        </div>
    )
}


const SmallSection = () =>{
    
    return(
        <div className="col-span-3 col-start-1 row-span-12 row-start-2
        flex flex-col gap-8 pt-24 relative
        ">
        {stickyElements.map((_,index) =>( 
          <StickyElementView key={index}  {...stickyElements[index].divELements}/>
        ))}
        
        </div>
    )
}


const SmallDevices = ({scrollIndex}) =>{
    return(
        <article className="flex flex-col items-center justify-center gap-12">       
       <div className="flex flex-col items-center justify-center gap-3">

       {stickyElements[scrollIndex].divELements.svgElement}
        
        
        <h5 className="text-xl sm:text-2xl font-charlieDisplay font-medium">
          {stickyElements[scrollIndex].divELements.title}
        </h5>
        
        <p className="font-charlieText font-medium text-lg w-[90%] text-center lg:w-full">
        {stickyElements[scrollIndex].divELements.paragraph}
        </p>
        

        {/* button section */}
        <div className="flex gap-2 items-center">
            <button className='bg-altasianBlue text-white min-w-fit py-2 px-7 rounded-full'>Get it free</button>
            
            <button className='flex gap-3 text-altasianBlue font-charlieDisplay justify-center items-center'>
        
            <p className="font-thin text-sm">
          {stickyElements[scrollIndex].divELements.buttonText}
            </p>
                <svg viewBox="0 0 11 8" fill='#1868DB' xmlns="http://www.w3.org/2000/svg" className='w-4'>
                    <path fillRule="evenodd" clipRule="evenodd"  
                    d="M7.40796 0L6.32831 1.2021L8.07854 3.1497H0.763182C0.341906 3.1497 0 3.53038 0 3.99943C0 4.46849 0.341906 4.84917 0.763182 4.84917H8.07854L6.32831 6.7979L7.40796 8L11 3.99943L7.40796 0Z">
                    </path></svg>
            </button>
        
            </div>
       </div>
          
          <LargeSection scrollIndex={scrollIndex} />
                </article>
    )
}


const StickyHero = () => {


    const [scrollIndex,setScrollIndex] = useState(0);
  
    const elementInView = () =>{
        
        const viewHeight  = window.innerHeight;

        stickyElements.forEach((_,index) =>{
            const element = document.getElementById(index);
            if(element){
                
                const elementRect = element.getBoundingClientRect();
                const elementViewPortCenter = elementRect.top + elementRect.height / 2;
                const viewPortCenter = viewHeight / 2 ;
            
                if((elementViewPortCenter - viewPortCenter) <= 150 ){
                setScrollIndex(index);
                }
            }else{
                console.log("ghen ghen")
            }
        })


    }


    useEffect(()=>{
        window.addEventListener("scroll",elementInView);
        elementInView()

        return () =>{
        window.removeEventListener("scroll",elementInView);

        }
    },[scrollIndex])

  return (
  
<div className=" w-[90vw] flex items-center justify-center">
<div className="w-screen hidden lg:stickyGridContainer">
       <HeroText/>
        <LargeSection scrollIndex={scrollIndex}/>
        <SmallSection scrollIndex={scrollIndex}/>
    </div>


{/* SMALL SCREENS*/}
    <div className="w-screen flex flex-col items-center justify-center gap-20 lg:hidden">
        {stickyElements.map((_,index) =>(
            <SmallDevices scrollIndex={index} key={index} />
        ))}
    </div>
</div>
 )
}



export default StickyHero