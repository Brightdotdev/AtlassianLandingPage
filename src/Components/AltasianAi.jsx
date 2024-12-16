import React from 'react'
import altasianAi from "/assets/videos/altasianAi.mp4"


const AiSvg = () => {
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none" className='w-20'>
<rect width="33" height="33" fill="#1868DB"/>
<path d="M27.205 15.1418H22.3438V17.8577H27.205V15.1418Z" fill="white"/>
<path d="M17.3603 5.29703H14.6445V10.1583H17.3603V5.29703Z" fill="white"/>
<path d="M9.6611 15.1418H4.7998V17.8577H9.6611V15.1418Z" fill="white"/>
<path d="M17.3603 22.8412H14.6445V27.7025H17.3603V22.8412Z" fill="white"/>
<path d="M20.3227 18.871L18.3735 20.8202L25.5509 27.9976L27.5001 26.0484L20.3227 18.871Z" fill="white"/>
<path d="M25.5497 5.00011L18.3735 12.1787L20.323 14.1276L27.4992 6.94895L25.5497 5.00011Z" fill="white"/>
<path d="M6.44917 4.99998L4.5 6.94916L11.6774 14.1265L13.6265 12.1774L6.44917 4.99998Z" fill="white"/>
<path d="M11.6761 18.8659L4.5 26.0446L6.44951 27.9934L13.6256 20.8148L11.6761 18.8659Z" fill="white"/>
</svg>
        )
}




const AltasianAi = () => {
  return (
    <section className='flex flex-col relative lg:gap-32
     w-screen md:h-screen items-center justify-start'>

        <div className="lg:w-[85%] w-full md:h-full flex flex-col items-center lg:justify-start  relative gap-8 py-8 px-2">
        <div className="w-full bg-[#101214] altasianAiClipPath h-full -z-10 absolute top-0 left-0 flex flex-col  items-center justify-start  gap-8 py-8 px-2">
      </div>    
          
            <div className="flex gap-2 items-center justify-center">
                <AiSvg/>
                <h5 className="md:text-3xl text-xl font-charlieText text-[#DDDEDE]">Atlassian Intelligence</h5>
            </div>

            <h4 className="lg:text-[2.5rem] text-xl  md:text-3xl text-center font-charlieDisplay text-[#DDDEDE]">
            Transform teamwork with human-AI collaboration
            </h4>

            <div className="md:w-[80%] w-full  border-2 border-[#DDDEDE]">
                <video className='max-w-full' src={altasianAi}
                autoPlay
                loop
                muted
                />   
             </div>
        </div>

        <button className="flex items-center justify-center lg:px-12 lg:py-3
        md:px-8 md:py-2 px-6 py-3
        rounded-full text-xl font-charlieText font-bold border-2 border-black hover:bg-[#F0F1F2]">
            Explore Altasian Inteligence
        </button>

    </section>
  )
}

export default AltasianAi