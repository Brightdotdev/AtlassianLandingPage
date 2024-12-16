import React from 'react'

const ProductsCard = ({setElementsClose}) => {
 
    return (

        <div onMouseLeave={setElementsClose} className="bg-white flex items-start max-w-[60vw] h-[30rem] rounded-xl shadow-xl absolute left-[15%] top-[100%] z-20 ">

<div className="w-[25%] h-[100%] flex flex-col justify-between pt-10 pl-8 pb-4 borderRadius bg-accentBg">
   
   
    <ul className="flex flex-col">
        <li className='h-[3rem]  w-[100%] flex items-center font-medium pl-4 borderRadiusSm'><a href="#">Featured</a></li>
        <li className='h-[3rem] w-[100%] flex items-center font-medium pl-4'><a href="#">Developers</a></li>
        <li className='h-[3rem] w-[100%] flex items-center font-medium pl-4'><a href="#">Product Managers</a></li>
        <li className='h-[3rem] w-[100%] flex items-center font-medium pl-4'><a href="#">IT Profesionals</a></li>
        <li className='h-[3rem] w-[100%] flex items-center font-medium pl-4'><a href="#">Business Teams</a></li>
        <li className='h-[3rem] w-[100%] flex items-center font-medium pl-4'><a href="#">Leadeship Teams</a></li>
    </ul>
    
    <a href="#" className='flex items-center  font-medium gap-4 p-2 self-center w-[100%] justify-center'>
        <p className='text-slate-500'>See all products</p>   

        <svg viewBox="0 0 11 8" className='fill-slate-500 w-5' xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.40796 0L6.32831 1.2021L8.07854 3.1497H0.763182C0.341906 3.1497 0 3.53038 0 3.99943C0 4.46849 0.341906 4.84917 0.763182 4.84917H8.07854L6.32831 6.7979L7.40796 8L11 3.99943L7.40796 0Z"></path></svg>
      
         </a>
</div>

<div className="max-w-[60%] pt-8 pl-6 flex flex-wrap">
  
    <li className="w-[50%] flex p-4 mb-4   items-center justify-center gap-4">
        <div className="flex items-center justify-center p-2 bg-accentBg rounded-md">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none"
         xmlns="http://www.w3.org/2000/svg"><g id="Container">
        <path d="M16.5504 32.6743H13.2216C8.20121 32.6743 4.59961 29.5992 4.59961 25.0964H22.4984C23.4261 25.0964 24.0264 25.7554 24.0264 26.6889V44.7C19.5517 44.7 16.5504 41.0758 16.5504 36.0239V32.6743ZM25.3906 23.7236H22.0619C17.0415 23.7236 13.4399 20.7034 13.4399 16.2007H31.3387C32.2664 16.2007 32.9213 16.8047 32.9213 17.7382V35.7493C28.4465 35.7493 25.3906 32.1251 25.3906 27.0732V23.7236ZM34.2855 14.8279H30.9567C25.9363 14.8279 22.3347 11.7528 22.3347 7.25H40.2336C41.1613 7.25 41.7615 7.90894 41.7615 8.78754V26.7987C37.2868 26.7987 34.2855 23.1745 34.2855 18.1226V14.8279Z" 
        fill="#1868DB"></path></g></svg>
      </div>

   <div className="flex flex-col w-[100%]">
    <h4 className='font-medium text-sm w-[100%]'>Jira</h4>
     <p className='font-normal text-xs text-slate-500'>Flexible project manangement</p>
   </div>
    </li>
  
    <li className="w-[50%] flex p-4 mb-4   items-center justify-center gap-4">
        <div className="flex items-center justify-center p-2 bg-accentBg rounded-md">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g ><path d="M38.6528 30.0401C28.7772 25.265 25.8922 24.5514 21.7311 24.5514C16.8488 24.5514 12.6878 26.5822 8.97058 32.2905L8.36029 33.2236C7.86096 33.992 7.75 34.2664 7.75 34.5957C7.75 34.9251 7.91644 35.1995 8.52673 35.5837L14.7961 39.4807C15.1289 39.7002 15.4063 39.81 15.6837 39.81C16.0166 39.81 16.2386 39.6453 16.5714 39.1514L17.5701 37.6145C19.1236 35.2544 20.5106 34.486 22.286 34.486C23.8394 34.486 25.6703 34.9251 27.945 36.0228L34.4917 39.0965C35.1575 39.4258 35.8787 39.2611 36.2116 38.4927L39.3185 31.6867C39.6514 30.9183 39.4295 30.4243 38.6528 30.0401ZM9.85827 18.0199C19.7338 22.795 22.6188 23.5086 26.7799 23.5086C31.6622 23.5086 35.8233 21.4778 39.5405 15.7695L40.1507 14.8364C40.6501 14.068 40.761 13.7936 40.761 13.4643C40.761 13.1349 40.5946 12.8605 39.9843 12.4763L33.715 8.57932C33.3821 8.35977 33.1047 8.25 32.8273 8.25C32.4944 8.25 32.2725 8.41466 31.9396 8.90864L30.9409 10.4455C29.3875 12.8056 28.0005 13.574 26.2251 13.574C24.6716 13.574 22.8408 13.1349 20.566 12.0372L14.0193 8.96353C13.3536 8.63421 12.6323 8.79887 12.2994 9.56729L9.1925 16.3733C8.85961 17.1417 9.08154 17.6357 9.85827 18.0199Z" fill="#1868DB"></path></g></svg></div>
    
    <div className="flex flex-col w-[100%]">
    <h4 className='font-medium text-sm w-[100%]'>Confluence</h4>
     <p className='font-normal text-xs text-slate-500'>Knowledgeall in one place</p>
   </div>
    </li>
  
    <li className="w-[50%] flex p-4 mb-4   items-center justify-center gap-4">
        <div className="flex items-center justify-center p-2 bg-accentBg rounded-md">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g ><path d="M28.1863 19.5744H39.1729C40.8229 19.5744 41.3863 21.1439 40.3802 22.3915L23.196 43.6C17.6424 39.1732 18.1655 32.1707 22.2302 27.0598L28.1863 19.5744ZM19.6948 28.0256H8.70823C7.05823 28.0256 6.49481 26.4561 7.50091 25.2085L24.6851 4C30.2387 8.42683 29.6351 15.3488 25.6107 20.5L19.6948 28.0256Z" fill="#1868DB"></path></g></svg></div>
   
        <div className="flex flex-col w-[100%]">
    <h4 className='font-medium text-sm w-[100%]'>Jira Service Manangement</h4>
     <p className='font-normal text-xs text-slate-500'>High-velocity service delivery</p>
   </div>
    </li>
  
    <li className="w-[50%] flex p-4 mb-4   items-center justify-center gap-4">
        <div className="flex items-center justify-center p-2 bg-accentBg rounded-md">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g ><path fillRule="evenodd" clipRule="evenodd" d="M25.5892 6.05798C24.3225 5.32718 22.7638 5.31424 21.4868 6.01915C21.4636 6.03708 21.439 6.05366 21.413 6.0687L21.4128 6.0688L21.4101 6.07039C20.5015 6.59546 19.8373 7.43643 19.5247 8.4079C19.3974 8.80997 19.3301 9.23475 19.3301 9.6696V15.1817L26.235 19.1664L26.2355 19.1667C27.9314 20.1419 28.9712 21.9446 28.9712 23.8994L28.9712 38.1293C28.9712 38.7062 28.8797 39.2706 28.7071 39.8047C28.689 39.8614 28.67 39.9178 28.65 39.9738L37.9126 34.6261L37.9136 34.6255C39.2071 33.8818 40.0006 32.5074 40.0006 31.0144V16.7845C40.0006 15.2974 39.2025 13.917 37.9127 13.1729L37.9126 13.1728L25.5892 6.05798Z" fill="#1868DB"></path><path fillRule="evenodd" clipRule="evenodd" d="M9.08703 13.1871L18.3506 7.83887C18.3306 7.89514 18.3114 7.95179 18.2932 8.00878C18.1208 8.54258 18.0294 9.1067 18.0294 9.68334V23.9132C18.0294 25.8679 19.069 27.6704 20.7646 28.6457L20.7656 28.6462L27.6705 32.631V38.143C27.6705 38.5787 27.603 39.0042 27.4752 39.4069C27.162 40.3785 26.497 41.2193 25.5878 41.7438L25.5876 41.7439C25.5616 41.759 25.537 41.7756 25.5138 41.7935C24.2368 42.4984 22.6782 42.4855 21.4116 41.7548L21.4114 41.7547L9.08806 34.6398L9.08788 34.6397C7.79815 33.8957 7 32.5153 7 31.0281L7 16.7983C7 15.3052 7.79347 13.9308 9.08703 13.1871Z" fill="#1868DB"></path></g></svg></div>
 
        <div className="flex flex-col w-[100%]">
    <h4 className='font-medium text-sm w-[100%]'>Rovo</h4>
     <p className='font-normal text-xs text-slate-500'>Unlock Entreprice Knowledge</p>
   </div>
    </li>
  
    <li className="w-[50%] flex p-4 mb-4   items-center justify-center gap-4">
        <div className="flex items-center justify-center p-2 bg-accentBg rounded-md">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g ><path d="M26.4824 8.51643C30.8432 9.79568 35.2467 9.79568 39.6075 8.51643C39.9923 8.43115 40.2488 8.687 40.1633 9.07077C38.9235 13.5481 38.9235 17.6844 40.1633 22.1617C40.2488 22.5028 39.9923 22.8013 39.6075 22.6734C35.2467 21.4794 30.8432 21.4794 26.4824 22.6734C26.1403 22.8013 25.8411 22.5028 25.9693 22.1617C27.1236 17.6844 27.1236 13.5481 25.9693 9.07077C25.8411 8.687 26.1403 8.43115 26.4824 8.51643ZM28.2352 24.3791V25.104C28.2352 28.4726 25.8838 30.9458 22.9766 30.9458C20.0694 30.9458 17.7607 28.6006 17.7607 25.7009C17.7607 22.8013 20.1121 20.4987 23.4041 20.4987H24.2592V10.3074C23.8317 10.2647 23.4041 10.2647 22.9766 10.2647C14.426 10.2647 7.5 17.1727 7.5 25.7436C7.5 34.3145 14.426 41.1798 22.9766 41.1798C31.5272 41.1798 38.496 34.2719 38.496 25.7436V24.3791H28.2352Z" fill="#1868DB"></path></g></svg></div>
  
  <div className="flex flex-col w-[100%]">
    <h4 className='font-medium text-sm w-[100%]'>Jira Product Discovery</h4>
     <p className='font-normal text-xs text-slate-500'>Capture and priortize ideas</p>
   </div>
    </li>
  
    <li className="w-[50%] flex p-4 mb-4   items-center justify-center gap-4">
        <div className="flex items-center justify-center p-2 bg-accentBg rounded-md">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g ><path d="M23.4999 23.1804V32.0934H14.5699V23.1804H23.4999V14.2734H7.20985C6.33985 14.2794 5.63985 14.9774 5.64585 15.8334C5.64585 15.8404 5.64585 15.8474 5.64585 15.8544V39.4664C5.62785 40.3224 6.31885 41.0294 7.18785 41.0474C7.19485 41.0474 7.20285 41.0474 7.20985 41.0474H30.8439C31.7139 41.0414 32.4139 40.3434 32.4079 39.4874C32.4079 39.4804 32.4079 39.4734 32.4079 39.4664V23.1804H23.4999Z" fill="#1868DB"></path><path d="M23.5 5.36084V14.2728H32.451V23.1798H41.354V6.92084C41.372 6.06484 40.681 5.35784 39.812 5.33984C39.805 5.33984 39.797 5.33984 39.79 5.33984L23.5 5.36084Z" fill="#1868DB"></path></g></svg></div>
   
        <div className="flex flex-col w-[100%]">
    <h4 className='font-medium text-sm w-[100%]'>Compass</h4>
     <p className='font-normal text-xs text-slate-500'>Optimize Software health</p>
   </div>
    </li>
  
    <li className="w-[50%] flex p-4 mb-4   items-center justify-center gap-4">
        <div className="flex items-center justify-center p-2 bg-accentBg rounded-md">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g ><path d="M8.37669 21.2881H39.6216C40.5194 21.2881 40.9983 20.8092 40.9983 19.9114V9.37669C40.9983 8.47885 40.5194 8 39.6216 8H33.0374C32.1396 8 31.6607 8.47885 31.6607 9.37669V14.7039H28.6679V9.37669C28.6679 8.47885 28.1891 8 27.2912 8H20.707C19.8092 8 19.3304 8.47885 19.3304 9.37669V14.7039H16.3376V9.37669C16.3376 8.47885 15.8587 8 14.9609 8H8.37669C7.47885 8 7 8.47885 7 9.37669V19.9114C7 20.8092 7.47885 21.2881 8.37669 21.2881ZM8.9154 30.5059C8.25698 28.6504 7.83799 26.735 7.71827 24.5203C7.65842 23.7422 8.01755 23.3232 8.85554 23.3232H39.1427C39.9807 23.3232 40.3399 23.6823 40.3399 24.4006C40.2201 26.6153 39.8011 28.6504 39.0829 30.5059C38.7237 31.4636 38.185 31.8826 37.1675 31.8826H10.8308C9.81324 31.8826 9.27453 31.4636 8.9154 30.5059ZM36.6288 35.474C33.7557 39.0055 29.027 41.28 23.9991 41.28C18.9712 41.28 14.1229 39.0055 11.3096 35.474C10.5914 34.5163 10.9505 33.9177 11.6688 33.9177H36.3295C37.0478 33.9177 37.4069 34.5163 36.6288 35.474Z" fill="#1868DB"></path></g></svg></div>
        <div className="flex flex-col w-[100%]">
    <h4 className='font-medium text-sm w-[100%]'>Guard</h4>
     <p className='font-normal text-xs text-slate-500'>Enhanced cloud security</p>
   </div>
  
    </li>
  
    <li className="w-[50%] flex p-4 mb-4   items-center justify-center gap-4">
        <div className="flex items-center justify-center p-2 bg-accentBg rounded-md">
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41 22.1094H31.0579L39.6682 17.1383L37.7774 13.8622L29.167 18.8334L34.1371 10.2237L30.861 8.33173L25.891 16.9414V7H22.109V16.9423L17.137 8.33173L13.862 10.2228L18.833 18.8324L10.2227 13.8622L8.33169 17.1373L16.942 22.1085H7V25.8906H16.9411L8.33169 30.8617L10.2227 34.1378L18.8321 29.1676L13.8611 37.7772L17.137 39.6682L22.1081 31.0577V41H25.8901V31.0586L30.8601 39.6682L34.136 37.7772L29.1651 29.1667L37.7754 34.1378L39.6664 30.8617L31.057 25.8915H40.998V22.1094H41ZM24 29.1437C21.1483 29.1437 18.8368 26.8324 18.8368 23.9805C18.8368 21.1287 21.1483 18.8172 24 18.8172C26.8517 18.8172 29.1631 21.1287 29.1631 23.9805C29.1631 26.8324 26.8517 29.1437 24 29.1437Z" fill="#625DF5"></path></svg></div>
        <div className="flex flex-col w-[100%]">
    <h4 className='font-medium text-sm w-[100%]'>Loom</h4>
     <p className='font-normal text-xs text-slate-500'>Quick, asyc video updates</p>
   </div> 
    </li>

</div>
        </div>
  )
}




const TeamsCard =({setElementsClose}) =>{
    
    return (
            <div onMouseLeave={setElementsClose} className="bg-white flex flex-col w-[50vw] shadow-lg  rounded-xl  absolute top-[100%] z-20  left-[25%] items-center justify-center">
                <ul className="flex w-[100%] items-center justify-center p-6">
                
                    <li className="flex-1 flex gap-2 flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none">
                <path d="M32 0H0v20.953h32V0z" fill="#BF63F3"/>
                <path d="M24.596 23.823v3.561H7.404v-3.561h5.727v-6.391h5.738v6.39h5.727z" fill="#FCA700"/>
                <path d="M18.869 17.432H13.13v3.527h5.738v-3.527z" fill="#AE2A19"/>
                <path d="M16 15.45a4.97 4.97 0 1 0 0-9.941 4.97 4.97 0 0 0 0 9.941z" fill="#fff"/>
                    </svg>
                        <div className="flex flex-col items-start gap-1 justify-center">
                            <h5 className='font-medium '>Software</h5>
                            <p className='font-normal text-sm' >Ship high quality, innovative software fast</p>
                        </div>
                    </li>
                    
                    <li className="flex-1 flex gap-2 flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none">
    <path d="M27.94.348 14.422 5.757v14.422l13.518 5.409V.348z" fill="#1868DA"/>
    <path d="M17.886 6.655v12.601h-7.07v8.128H5.409v-8.128H0V6.655h17.886z" fill="#FCA700"/>
    <path d="M17.885 6.655h-3.463V19.25h3.463V6.655z" fill="#AE2A19"/>
</svg>
                    
                        <div className="flex flex-col items-start gap-1 justify-center">
                            <h5 className='font-medium '>Marketing</h5>
                            <p className='font-normal text-sm' >Collaborative strategies for market succes</p>
                        </div>
                    </li>


                    <li className="flex-1 flex gap-2 flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none">
    <path d="M0 4.648v18.736l5.426-4.652h16.289V4.648H0z" fill="#FCA700"/>
    <path d="M9.644 5.204a2.405 2.405 0 0 1 2.399-2.42 2.402 2.402 0 0 1 2.398 2.42c0 .684-.163.996-.312 1.195-.177.231-.398.394-.787.68-.064.049-.136.099-.213.153-.484.357-1.1.846-1.562 1.656-.466.815-.724 1.838-.724 3.191h2.399c0-1.05.194-1.634.403-1.991.208-.367.493-.616.91-.924.05-.036.104-.077.162-.117.376-.272.91-.656 1.313-1.186.52-.679.81-1.53.81-2.657 0-2.652-2.127-4.82-4.797-4.82s-4.798 2.168-4.798 4.82v1.2h2.399v-1.2zM12.042 13.885a1.497 1.497 0 1 0 0 2.996 1.497 1.497 0 1 0 0-2.996z" fill="#1868DB"/>
    <path d="M7.272 4.648h2.435a2.26 2.26 0 0 0-.068.556v1.2H7.24v-1.2c0-.185.01-.37.032-.556zM13.54 15.383a1.5 1.5 0 1 1-3.002.003 1.5 1.5 0 0 1 3.002-.003zM16.84 5.204c0 1.132-.29 1.978-.81 2.657-.403.53-.937.914-1.313 1.186-.059.045-.113.081-.163.117-.416.313-.701.562-.91.928-.207.362-.402.946-.402 1.992h-2.399c0-1.354.254-2.376.72-3.187.466-.81 1.082-1.298 1.561-1.66.077-.055.15-.105.213-.154.394-.29.61-.448.787-.68.154-.203.317-.515.317-1.199 0-.19-.022-.38-.068-.556h2.435c.023.185.032.37.032.556z" fill="#AE2A19"/>
</svg>
                        <div className="flex flex-col items-start gap-1 justify-center">
                            <h5 className='font-medium '>IT</h5>
                            <p className='font-normal text-sm' >Deliver exceptiponal operations support services</p>
                        </div>
                    </li>
                </ul>



                <ul className="flex w-[100%] items-start justify-start p-4 bg-accentBg">

                <li className="flex flex-col flex-1 items-start justify-center gap-4">
                    <h5 className='font-medium'>SOLUTION</h5>
                    <p>Work Management</p>
                    <p>IT Service Management</p>
                    <p>Agile Ops</p>
                </li>

                <li className="flex flex-col flex-1 items-start justify-center gap-4">
                    <h5 className='font-medium'>BY TEAM SIZE</h5>
                    <p>Entreprise</p>
                    <p>Small Business</p>
                    <p>Start Up</p>
                    <p>Non-Profit</p>
                </li>
                <li className="flex flex-col flex-1 items-start justify-center gap-4">
                    <h5 className='font-medium'>BY INDUSTRY</h5>
                    <p>Retail</p>
                    <p>Telecommunications</p>
                    <p>Professional Services</p>
                    <p>Goverment</p>
                </li>

                </ul>


            </div>
    )
}





const WhyCard =({setElementsClose}) =>{
    
    return (
            <div onMouseLeave={setElementsClose} className="bg-white flex flex-col w-[60vw] shadow-lg  rounded-xl  absolute top-[100%] z-20  left-[20%] items-center justify-center">
           
                <ul className="flex flex-wrap items-center justify-between">
                
                    <li className="flex flex-col items-start p-4 mb-2 w-[15rem] gap-1 justify-center">
                            <h5 className='font-medium text-secondaryText'>Software</h5>
                            <p className='font-normal text-sm text-slate-600' >Ship high quality, innovative software fast</p>  
                    </li>
                    
                    <li className="flex flex-col items-start p-4 mb-2 w-[15rem] gap-1 justify-center">
                            <h5 className='font-medium text-secondaryText'>Marketing</h5>
                            <p className='font-normal text-sm text-slate-600' >Collaborative strategies for market succes</p>                
                    </li>

                    <li className="flex flex-col items-start p-4 mb-2 w-[15rem] gap-1 justify-center">
                            <h5 className='font-medium text-secondaryText'>IT</h5>
                            <p className='font-normal text-sm text-slate-600' >Deliver exceptiponal operations support services</p>
                    </li>
               
               

                    <li className="flex flex-col items-start p-4 mb-2 w-[15rem] gap-1 justify-center">
                            <h5 className='font-medium text-secondaryText'>Software</h5>
                            <p className='font-normal text-sm text-slate-600' >Ship high quality, innovative software fast</p>  
                    </li>
                    
                    <li className="flex flex-col items-start p-4 mb-2 w-[15rem] gap-1 justify-center">
                            <h5 className='font-medium text-secondaryText'>Marketing</h5>
                            <p className='font-normal text-sm text-slate-600' >Collaborative strategies for market succes</p>                
                    </li>

                    <li className="flex flex-col items-start p-4 mb-2 w-[15rem] gap-1 justify-center">
                            <h5 className='font-medium text-secondaryText'>IT</h5>
                            <p className='font-normal text-sm text-slate-600' >Deliver exceptiponal operations support services</p>
                    </li>




                </ul>

            </div>
    )
}





const ResourcesCard =({setElementsClose}) =>{
    
    return (
        <div onMouseLeave={setElementsClose} className="bg-white flex flex-col w-[60vw] shadow-lg  rounded-xl  absolute top-[100%] z-20  left-[20%] ">
           
        <ul className="flex w-[100%] items-center justify-between">
        
            <li className="flex flex-col items-start p-4  w-[12rem] gap-1 justify-center flex-1">
                    <h5 className='font-medium text-secondaryText'>Customer Support</h5>
                    <p className='font-normal text-sm text-slate-600' >Ask questions report busgs and give us feedback</p>  
            </li>
            
            <li className="flex flex-col items-start p-4  w-[12rem] gap-1 justify-center flex-1">
                    <h5 className='font-medium text-secondaryText'>Find Partnes</h5>
                    <p className='font-normal text-sm text-slate-600' >Consulting training and product customisation support</p>                
            </li>

            <li className="flex flex-col items-start p-4  w-[12rem] gap-1 justify-center flex-1">
                    <h5 className='font-medium text-secondaryText'>Mogration Program</h5>
                    <p className='font-normal text-sm text-slate-600' >Step-by-step guidance for your Atlassian clounnd migration</p>
            </li>
       
       

            <li className="flex flex-col items-start p-4  w-[12rem] gap-1 justify-center flex-1">
                    <h5 className='font-medium text-secondaryText'>University</h5>
                    <p className='font-normal text-sm text-slate-600' >Learn and enxpand your skill set for all atlsation</p>  
            </li>
        </ul>
            

        <ul className="flex justify-between p-6 bg-accentBg">




<li className="flex flex-col gap-4 w-[50%] items-start">
 
    <h5 className='font-semibold text-secondaryText'>SUPPORT</h5>
    <div className="flex gap-6  items-center">
         <ul className='font-medium text-sm text-slate-600 flex flex-col gap-4'>
            <li>General Inquires</li>
            <li>Product Advice</li>
            <li>Partner Support</li>
            <li>Entreprise Support</li>
        </ul>

         <ul className='font-medium text-sm text-slate-600 flex flex-col gap-4'>
            <li>Technical Support</li>
            <li>Pricing and Billing</li>
            <li>Developer Support</li>
            <li>Purchasing and Lisencing</li>
        </ul>
    </div>
</li>

<li className="flex flex-col gap-4 w-[50%] items-start">
    <h5 className='font-semibold text-secondaryText'>LEARN</h5>
    <div className="flex gap-6 items-start">
         <ul className='font-medium text-sm text-slate-600 flex flex-col gap-4'>
            <li>Project Manangement</li>
            <li>Agile</li>
            <li>Community</li>
            <li>Get Started</li>
        </ul>
         <ul className='font-medium text-sm text-slate-600 flex flex-col gap-4'>
            <li>Project Collaboration</li>
            <li>Team Playboox</li>
            <li>Product Documentation</li>
        </ul>
    </div>
</li>

        </ul>

    </div>
    )
}





const StickyElementView = ({id,title,paragraph,svgElement,buttonText})=>{


    return(
        <article id={id} className='min-h-[18rem] mt-20 flex flex-col w-full relative gap-4'>
        
        
{svgElement}


            <h5 className="text-3xl font-charlieDisplay font-medium">
              {title}
            </h5>

            <p className="font-charlieText font-medium text-lg w-full">
          {paragraph}
            </p>

            <div className="flex gap-2 items-center">
                <button className='bg-altasianBlue text-white py-2 px-6 rounded-full'>Get it free</button>
                
                <button className='flex gap-3 text-altasianBlue font-charlieDisplay justify-center items-center'>

                <p className="font-thin text-sm">
              {buttonText}
                </p>
                    <svg viewBox="0 0 11 8" fill='#1868DB' xmlns="http://www.w3.org/2000/svg" className='w-4'>
                        <path fillRule="evenodd" clipRule="evenodd"  
                        d="M7.40796 0L6.32831 1.2021L8.07854 3.1497H0.763182C0.341906 3.1497 0 3.53038 0 3.99943C0 4.46849 0.341906 4.84917 0.763182 4.84917H8.07854L6.32831 6.7979L7.40796 8L11 3.99943L7.40796 0Z">
                        </path></svg>
                </button>

                </div>
        </article>
    )
}

export{ProductsCard,TeamsCard,WhyCard,ResourcesCard,StickyElementView}