import React from 'react'
import linesvg from "/assets/images/LineSvg.png"



const AltasianLogo = () =>{
    return(
        <svg width="32" height="32" viewBox="0 0 48 48" 
        fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Container">
        <path d="M41.3175 36.5672L25.4402 4.81262C25.1276 4.12502 24.8151 4 24.44 4C24.1275 4 23.7524 4.12502 23.3774 4.75011C21.127 8.31312 20.1269 12.4387 20.1269 16.7518C20.1269 22.7527 23.1898 28.3785 27.6905 37.4423C28.1906 38.4425 28.5656 38.63 29.4407 38.63H40.4423C41.2549 38.63 41.6925 38.3175 41.6925 37.6924C41.6925 37.3798 41.63 37.1923 41.3175 36.5672ZM18.2516 21.565C17.0014 19.6898 16.6264 19.5647 16.3138 19.5647C16.0013 19.5647 15.8138 19.6898 15.2512 20.8149L7.31255 36.6922C7.06251 37.1923 7 37.3798 7 37.6299C7 38.1299 7.43756 38.63 8.3752 38.63H19.5643C20.3144 38.63 20.877 38.0049 21.1895 36.8172C21.5646 35.317 21.6896 34.0043 21.6896 32.4416C21.6896 28.066 19.7518 23.8154 18.2516 21.565Z"
         fill="#1868DB"></path></g></svg>
    )
}


const CheckmarkSvg = ({styles}) =>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 74 71" fill="none" className={styles}>
    <g id="Gestural Line/symbol check 1">
        <path id="Vector" d="M44.0389 33.5379C45.8049 32.3341 51.7382 25.3965 46.0606 27.0247C44.5346 28.2363 37.5403 37.5739 33.6984 42.3892C32.8541 40.4137 30.4297 38.2529 28.6559 37.1571C27.5793 36.1616 27.1455 37.8054 27.1455 37.8054C27.4476 38.2453 27.7652 38.9397 28.501 39.4954C29.3221 40.1127 29.4305 41.3937 30.7783 42.3738C35.5186 45.8078 33.3808 50.8623 37.9663 42.1036C39.5464 38.2606 43.5122 37.0105 44.0312 33.5379H44.0389Z" fill="#82B536"/>
        <path id="Vector_2" d="M73.9993 33.2525C74.0381 23.2745 72.4037 7.62464 61.5132 3.92824C69.0653 14.0065 73.643 30.2429 69.4371 42.7366C65.541 62.5305 35.4644 73.635 17.3394 62.1677C19.1984 63.9272 23.4508 65.9259 26.0611 66.6976C19.1364 68.1947 3.56753 50.7699 14.5897 60.2539C-16.6875 20.4424 32.8308 -17.6327 61.3351 16.7538C53.2486 1.15796 32.2499 -4.17445 19.3146 3.41126C-43.0075 52.5834 64.6115 110.815 73.9916 33.2525H73.9993Z" fill="#82B536"/>
    </g>
</svg>
    )
}

const StarSvg = ({styles}) =>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93 91" fill="none" className={styles}>
    <g id="Gestural Line/star 1">
        <path id="star 1" d="M63.1582 46.7878C65.7082 46.5678 99.8282 38.3178 90.8782 36.5278C87.5582 37.4578 84.9782 36.5178 83.3182 39.0378C82.8382 36.0678 76.3282 40.8078 75.3282 40.9878C74.8782 38.7378 64.6782 44.5278 66.1682 42.4378C61.5382 42.4978 55.7882 44.1177 49.8082 46.0177C46.8782 44.0277 59.4382 29.8278 54.1582 32.8978C54.5282 32.0978 55.9482 28.6378 55.7582 30.9278C57.4282 28.9678 75.6082 -1.03222 68.0482 4.04778C62.9482 10.2378 59.1182 20.6078 54.7982 25.7278C50.5982 27.4578 47.6882 42.3178 43.0082 40.8378C40.2782 37.4978 33.2382 -3.40217 28.2382 0.227831C29.1082 3.40783 28.3182 6.25777 30.7482 7.78777C27.7782 8.26777 32.5182 14.7778 32.6982 15.7778C30.4982 16.1978 36.1982 26.4378 34.1482 24.9378C34.1882 27.8278 34.8382 31.1678 35.7782 34.7178C34.5282 33.7678 33.1582 31.5978 32.3682 31.2778C23.9482 27.8678 17.5682 20.0278 8.7982 15.7778C1.4282 25.1678 66.5982 48.8577 26.1882 52.3978C18.5882 57.3577 8.48819 58.1177 0.00819142 62.8877C-0.721809 73.2177 47.6182 44.7178 33.6682 61.0878C31.4982 68.0078 28.2782 75.7778 23.8282 82.5978C20.9882 108.608 45.1382 37.9478 44.1382 64.9078C47.4682 71.3478 50.6882 79.1078 52.3382 87.0978C64.1482 104.418 48.0282 58.5978 46.3382 52.1078C52.7382 49.3778 77.4782 80.3378 81.9582 75.4578C82.1682 74.7678 78.6082 70.9378 77.5282 70.5278C76.7982 70.8978 76.4282 71.1977 75.9982 70.5177C78.1682 68.4277 70.5582 65.7878 69.8382 65.0678C71.4382 63.4778 60.8482 58.3077 63.4182 58.3877C61.4382 55.6177 58.4082 52.8277 54.9582 50.0177C61.0782 48.8377 63.7382 44.5177 63.1782 46.7677L63.1582 46.7878Z" fill="#FCA700"/>
    </g>
</svg>
    )
}


const BlackStarSvg =  ({styles}) =>{
    return(
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 49 51" fill="none" className={styles}>
    <g id="Gestural Line/star 3">
        <path id="Vector" d="M47.4104 41.8537C47.4404 41.8037 47.4404 41.7137 47.5004 41.6437C45.7504 40.7637 45.5504 38.6038 44.2005 37.3138L44.1504 37.2637C42.7804 36.8237 43.1505 35.4538 41.4505 35.4438C41.4505 35.4438 41.8904 35.2237 41.9004 35.2237C39.1404 32.4837 32.3204 25.7537 32.3204 25.7537C32.1704 26.3637 33.4104 25.3037 34.6604 25.4837C34.6604 25.4837 34.7503 25.2538 34.8403 25.4338C38.0303 22.3238 41.6205 21.1338 45.7005 19.6538C47.7405 19.1038 48.0504 13.3337 44.5604 15.7237C44.5204 15.6837 44.4304 15.6538 44.3904 15.5838C43.1704 17.0038 41.1404 16.4837 39.6004 17.2237L39.5404 17.2537L36.9804 18.5037C35.5904 19.0737 33.9403 19.5238 32.2103 19.9638C32.2603 19.9138 32.3104 19.8638 32.3604 19.8138C32.3604 19.8138 32.5404 17.0438 32.4904 15.6738C32.4904 15.6738 34.2404 13.4738 33.6604 11.9638C34.6504 10.1938 38.1703 6.3237 34.9703 5.2237C33.9203 5.2237 33.1004 4.31373 32.7404 6.00373C32.6804 5.99373 32.6004 6.01371 32.5204 5.98371C32.3304 7.73371 30.2604 8.97374 29.6904 10.6337L29.6704 10.7038C29.8104 12.1238 28.7105 13.5238 28.7005 13.5238C28.1805 14.8238 27.5004 16.2437 26.7804 17.7237C26.4804 16.9237 26.1504 16.2138 25.8204 15.7038C24.6204 14.4038 25.1304 -3.35621 20.6904 0.56379C20.9004 3.91379 21.9604 7.40374 21.1004 10.3837C20.6804 10.6137 21.3203 11.8038 21.8403 12.7738C21.8003 14.0037 21.5504 14.6638 21.4804 16.4238C19.2804 14.8338 9.6804 6.7838 10.2704 12.2038C11.3004 12.7538 12.0503 13.3838 12.5903 14.6638C13.0903 15.2138 17.5004 17.6938 17.6404 18.3138C17.3504 19.1738 22.5605 19.8637 20.4505 20.5037C20.7605 21.1837 21.1804 21.8338 21.6704 22.4638C19.3904 22.7038 16.6604 23.3737 15.2304 24.2437C14.9804 24.6737 5.88033 25.2537 2.58033 27.3837C0.610334 28.4937 -1.12958 29.0438 0.920422 30.7138C1.66042 30.1138 4.44038 30.9738 4.38038 30.1838C5.06038 30.4638 9.66042 28.7037 10.1704 29.0037C10.4204 29.4037 14.0404 27.2838 13.6104 28.2838C16.1204 28.9938 19.1804 28.4137 22.3604 27.6037C21.1004 29.6037 19.8605 32.4537 19.7005 34.2237C18.6205 36.4937 15.7704 41.5138 14.8604 44.5938C13.5604 46.8338 14.0104 47.0138 15.6504 48.1638L15.6804 48.1938C16.0204 48.4238 15.6404 48.1937 16.9304 48.2437C16.8004 48.1237 16.6104 47.6038 16.3604 47.6938C16.5304 47.3438 18.4904 46.8437 17.6704 46.3737C17.6404 46.3037 18.9204 45.3237 19.0504 44.2637C20.1904 40.4837 22.9204 38.5737 24.9404 34.2637C24.8904 34.7137 28.2904 43.1838 28.1304 47.4038C27.8804 49.4838 32.9204 52.5838 32.1904 47.9438C32.2504 47.9238 32.3004 47.8438 32.3904 47.8338C31.5804 45.9238 32.6504 43.9537 32.2304 42.0137L32.2103 41.9338C31.3003 40.7538 32.3504 39.7738 30.9104 38.8138C30.9104 38.8138 31.4004 38.8637 31.4104 38.8737C30.7704 36.1237 30.3704 32.7637 29.7704 29.7537C31.9204 31.7037 33.8103 33.8037 34.5903 36.1137L34.6904 35.9638C34.6904 36.0338 34.8403 36.0837 34.7103 36.2437C36.5203 36.6237 37.1404 37.3837 38.4505 37.8937C38.4505 37.8937 39.8504 40.4237 41.4804 40.5137L43.9603 44.0238C45.0303 45.8338 50.8004 44.7937 47.4505 41.8937L47.4104 41.8537Z" fill="#101214"/>
    </g>
</svg>
    )
}

const ArrowSvg = () => {
    return(
        <svg viewBox="0 0 11 8" fill='#000' xmlns="http://www.w3.org/2000/svg" className='w-3 group-hover:fill-[#B3B4B4] group-hover:translate-x-2'>
        <path fillRule="evenodd" clipRule="evenodd"  
        d="M7.40796 0L6.32831 1.2021L8.07854 3.1497H0.763182C0.341906 3.1497 0 3.53038 0 3.99943C0 4.46849 0.341906 4.84917 0.763182 4.84917H8.07854L6.32831 6.7979L7.40796 8L11 3.99943L7.40796 0Z">
        </path></svg>
)}


const Footer = () => {
  return (

<footer className="flex flex-col gap-24 items-center justify-start relative w-screen">

<div className="flex flex-col md:gap-8  gap-4 items-center justify-center w-[80%] relative  h-[70vh]">
<CheckmarkSvg styles="absolute top-[30%] lg:right-[15%] w-10 md:w-20 right-0"/>
<StarSvg styles="absolute -top-4 md:-top-24 left-0 xl:top-0  w-16 md:w-32 xl:left-[20%]" />
   <BlackStarSvg styles="absolute xl:top-[25%] top-0 md:top-[-1%] w-12 md:w-20 left-[30%] xl:left-[15%]" /> 
<h4 className="md:text-4xl text-center font-charlieText">
Help us shape <b className='font-charlieDisplay'>the future <br/> of teamwork</b>
    </h4> 
    <p className="md:text-sm text-xs text-center font-charlieText lg:w-1/2">
    At Atlassian, we believe the impossible is possible - <br/>
    together. Join us today to help us inspire teamwork<br/>
     anywhere and everywhere, worldwide.
    </p>

    <button className='flex font-charlieText items-center text-lg justify-center
    md:px-8 py-2 px-6 rounded-full  border border-black hover:bg-[#F0F1F2]'>
        Share your story
    </button>
</div>



<div className="w-[98%]  h-[25rem] lg:p-0 p-16 footerSmallDevices  lg:footerCLipPath flex flex-col items-center justify-center gap-6 bg-altasianBlue">
    <h4 className="lg:text-4xl md:text-3xl text-2xl text-white font-charlieDisplay text-center flex relative items-center justify-center">Unleash the power of teamwork

        <span className="md:w-44 w-28 absolute sm:right-0 bottom-0 md:-bottom-2"><img src={linesvg} alt="" /> </span>
    </h4>
    <p className="text-sm text-white text-center">Join millions teaming up on their best work</p>
    <button className="text-white md:text-lg text-sm  md:px-8 py-3 px-6 rounded-full border-2 border-white hover:bg-[#1A61C6]">Get started for free</button>
</div>


<div className="md:w-[90%] w-full bg-[#F8F8F8] rounded-lg flex items-start gap-4 justify-start md:flex-row flex-col p-10 px-8">
    <article className="flex flex-col flex-1 gap-4 items-start justify-start">
        <div className="py-4 flex items-center justify-center"><AltasianLogo/></div>
        <div className="flex flex-col items-start justify-start gap-4">
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Company</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Careers</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Events</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Blogs</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Investor Relations</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Altasion Foundations</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">COntact Us</p>
        </div>
    </article>

    <article className="flex flex-col flex-1 gap-4 items-start justify-start">
        <h5 className="py-4 flex items-center justify-center font-charlieDisplay text-lg">Products</h5>
        <div className="flex flex-col items-start justify-start gap-4">
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Rovo</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Jira</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Jira Align</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Jira Service Management</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Conflunce</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Trello</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Bitbucket</p>
            <button className="flex items-center gap-3 justify-center font-charlieDisplay group transition-all duration-500">
                <p className='group-hover:text-[#B3B4B4] group-hover:decoration-solid group-hover:underline'>See all products</p>
                <ArrowSvg/>
            </button>
        </div>
    </article>

    <article className="flex flex-col flex-1 gap-4 items-start justify-start">
        <h5 className="py-4 flex items-center justify-center font-charlieDisplay text-lg">Resources</h5>
        <div className="flex flex-col items-start justify-start gap-4">
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Technical support</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Purchasing & licensing</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Altasian Community</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Knowledge based</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Marketplace</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">My Account</p>
               <button className="flex items-center gap-3 justify-center font-charlieDisplay group transition-all duration-500">
                <p className='group-hover:text-[#B3B4B4] group-hover:decoration-solid group-hover:underline'>Create support ticket</p>
                <ArrowSvg/>
            </button>
        </div>
    </article>
    <article className="flex flex-col flex-1 gap-4 items-start justify-start">
        <h5 className="py-4 flex items-center justify-center font-charlieDisplay text-lg">Learn</h5>
        <div className="flex flex-col items-start justify-start gap-4">
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Partners</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Training & certification</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Documentation</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Developer resources</p>
            <p className="font-charlieText cursor-pointer hover:decoration-solid hover:underline hover:text-[#B3B4B4]">Entreprice services</p>
               <button className="flex items-center gap-3 justify-center font-charlieDisplay group transition-all duration-500">
                <p className='group-hover:text-[#B3B4B4] group-hover:decoration-solid group-hover:underline'>See all resources</p>
                <ArrowSvg/>
            </button>
        </div>
    </article>
</div>


</footer>
)
}

export default Footer