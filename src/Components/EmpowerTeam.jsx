import React, { useEffect, useState } from 'react'
import softwareMain from "/assets/images/softwareMain.webp"
import projmMMain from "/assets/images/projmMMain.webp"
import pmMain from "/assets/images/pmMain.webp"
import marketingMain from "/assets/images/marketingMain.webp"
import itMain from "/assets/images/itMain.webp"
import designMain from "/assets/images/designMain.webp"
import softwareCard3 from "/assets/images/softwareCard3.webp"
import softwareCard2 from "/assets/images/softwareCard2.webp"
import softwareCard1 from "/assets/images/softwareCard1.webp"





const empowerContents = [

    {id: 0, title : "Software", text : "Supercharge dev productivity", paragraph : "Plan, track, and release world-class software with the number one software development tool for agile teams",  image : softwareMain },
    {id: 1, title : "Product Management", text : "Build products like the best of them", paragraph : "Prioritize your most impactful ideas, build roadmaps to engage stakeholders, and plan and track your work with end-to-end visibility"  , image : pmMain },
    {id: 2, title : "Marketing", text : "Bring marketing closer to product", paragraph : "Track your work easily, run cross-functional marketing projects, and remove silos so you deliver real impact." , image :  marketingMain },
    {id: 3, title : "Project Management", text : "Perfect your project management", paragraph : "Plan, track, and measure any project - from simple to complex - to ensure a smooth delivery.", image : projmMMain },
    {id: 4, title : "Design", text : "Design with all the right context", paragraph : "Organize work, synchronize teams, and meet deadlines – all without sacrificing creativity" , image : designMain },
    {id: 5, title : "IT", text : "Unlock high-velocity service for all", paragraph : "Connect Dev, IT, and business teams to quickly respond to change and deliver exceptional service experiences" , image : itMain },

]

const softwareTemplateCards = [
    {id:0,text: "Scrum",image:softwareCard1,paragraph : "Easily plan,track and managework across sprints"},
    {id:1,text: "Bug Tracking",image:softwareCard2,paragraph : "Seamlessly report, track, and prioritize bugs to address development issues"},
    {id:2,text: "DevOps",image:softwareCard3,paragraph : "Develop, deploy, and manage applications with an open tools approach"},

]
//utils
const ArrowSvg = ({styles}) => {
    return(
        <svg viewBox="0 0 11 8" fill='#1868DB' xmlns="http://www.w3.org/2000/svg" className={'w-4 transition-all duration-500' + styles}>
        <path fillRule="evenodd" clipRule="evenodd"  
        d="M7.40796 0L6.32831 1.2021L8.07854 3.1497H0.763182C0.341906 3.1497 0 3.53038 0 3.99943C0 4.46849 0.341906 4.84917 0.763182 4.84917H8.07854L6.32831 6.7979L7.40796 8L11 3.99943L7.40796 0Z">
        </path></svg>
)}


const EmpowerButton = ({text,id,changeIndex,teamIndex}) =>{

    return(
        <button onClick={() => changeIndex(id)} id={id} className={`${teamIndex === id ? "border-2 border-altasianBlue bg-[#E9F2FE]" : "border-none bg-[#F0F1F2]" }` + ` md:text-2xl text-blackText py-2 px-6 rounded-full min-w-fit  transition-all duration-500 hover:shadow-xl`}>
            {text}
        </button>
    )
}

const TopSection = ({setTeamIndex,teamIndex}) =>{
    

    
    
    useEffect(() =>{
             
        const handleClick = (index) => {
            setTeamIndex(index);
        };

        empowerContents.forEach((_, index) => {
            const element = document.getElementById(index);
            if (element) {
                const handleIndexClick = () => handleClick(index)
                element.addEventListener("click", handleIndexClick);
            }
        });

        return () =>  { empowerContents.forEach((_, index) => {
            const element = document.getElementById(index);

            if (element) {
                const handleIndexClick = () => handleClick(index)
                element.removeEventListener("click", handleIndexClick);
            }
        });
    };
    }, [])


    return(
            
    <div className="flex flex-col gap-8 items-center justify-center w-full">
    <h5 className="lg:text-4xl text-4xl font-charlieDisplay text-center">Empower everyone, on every team</h5>

<div className=" p-2 flex items-center justify-start gap-3 w-full overflow-y-auto hideScrollbar">
  {empowerContents.map((content,_) =>(
        <EmpowerButton key={content.id}  text={content.title} id={content.id} teamIndex={teamIndex} changeIndex={setTeamIndex} />
  ))}
</div>
    </div>
        )
}

const BottomSection = ({teamIndex}) =>{
   
    
    return(
        <div className="w-full flex lg:justify-between justify-center flex-col lg:flex-row items-start gap-4">
        <div className="flex flex-col lg:gap-8 gap-6 lg:w-[40%] w-full">
            <h5 className="lg:text-4xl text-2xl font-charlieDisplay">{empowerContents[teamIndex].text}</h5>
            <p className="text-lg font-charlieText">{empowerContents[teamIndex].paragraph}

</p>
            <button className="flex items-center gap-2">
                <p className="text-sm text-altasianBlue">Learn more about {empowerContents[teamIndex].title}</p>
                <ArrowSvg/>
            </button>
        </div>

        <div className='lg:w-[60%] w-full'><img src={empowerContents[teamIndex].image} alt="" /></div>
    </div>
    )
}

const TemplateCards = ({text,index,image,paragraph}) =>{
    return(
        <article key={index} className="flex flex-col items-start border border-grayText h-fit 
         rounded-3xl gap-4 p-4 cursor-pointer duration-500 w-[90%] lg:flex-1 hover:shadow-2xl">
        <img src={image} className='w-full' alt="" />

        <h5 className="text-2xl text-blackText font-charlieDisplay">{text}</h5>
        <p className='font-charlieText'>{paragraph}</p>
        <button className="flex items-center gap-2 justify-center">
            <p className='font-charlieText text-altasianBlue'>Try it out</p>
            <ArrowSvg/>
        </button>
    </article>
    )
}


const Template =() =>{

    return(
        <div className="flex flex-col items-center gap-20 w-full">
           
           <div className="flex flex-col gap-4 items-center justify-center">
           <h4 className="text-xl py-4 text-grayText">
            Get started with a template
            </h4>

            <div className="flex lg:flex-row flex-col lg:w-[85%] w-full items-center gap-20 justify-center">
                {
                    softwareTemplateCards.map((element,index) =>(
                        <TemplateCards key={index}  {...element}  />
                    ))
                }
       </div>
           </div>

       <div className="w-full flex flex-col items-center justify-center  md:p-0 p-2 gap-3">
        <h3 className="lg:text-5xl text-center text-4xl font-charlieDisplay">For teams of all sizes</h3>
        <p className='font-charlieText lg:text-2xl text-xl text-center'>Everyone from start-ups to large enterprises prefer Atlassian</p>
        <button className="flex font-charlieText justify-center items-center gap-2 group">
            <p className='md:text-xl text-[#1868DB]'>Explore all customers stories</p>
            <ArrowSvg styles=" group-hover:translate-x-2"/>
        </button>
       </div>
        </div>
    )
}

//main content
const EmpowerTeam = () =>{
    const [teamIndex,setTeamIndex] = useState(0)
    return(
        <section className="w-screen flex flex-col items-center justify-center gap-20">
        <div className="w-[90%] flex flex-col gap-10 items-center justify-center">
    

    <TopSection teamIndex={teamIndex} setTeamIndex={setTeamIndex} />


  <BottomSection teamIndex={teamIndex} setTeamIndex={setTeamIndex} />
            </div>    

            <Template/>
        </section>
    )
}


export default EmpowerTeam