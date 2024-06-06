import React from 'react'
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { TiLocation } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
   const currentYear = new Date().getFullYear();
  return (
    <div className='h-[300px] w-full flex flex-col bgfooter sm:h-full'>
           {/* //for logo and social links */}
         <div className='sec1  xs:text-[36px]'>
            
            <div>
                SPRING
            </div>
            
         </div>
         <div class="divider md:h-[1.5px] sm:h-[1px]"></div>
         {/* //for links */}
         <div className='sec2 '>
           
            
            <ul className='company  sm:gap-[10px] sm:grid sm:grid-cols-1 sm:p-[10px] sm:text-center'>
            
                <li>About Us</li>
                <li>Culture</li>
                <li>Blog</li>
                <li>Terms and Policy</li>
                <li>Help and Support</li>
                
            </ul>
           
          
         </div>
         <div class="divider md:h-[1.5px] sm:h-[1px]"></div>
         <div className='sec3 md:p-3  '>
        <span className='sm:text-[14px]'>FOLLOW US AT:</span>
        <div className='  flex flex-wrap  justify-center items-center gap-5 md:gap-2'>
        <span className='icons'>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                > <AiOutlineInstagram
                color="white"
                fontSize={25}
                className="ico "
              /></a></span>
                <span  className='icons'><a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter color="white" fontSize={27} className="ico" />

                </a></span>
                <span  className='icons'><a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsYoutube color="white" size={26} className="ico " />
                </a></span>
                <span  className='icons'> <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn color="white" size={26} className="ico " />
                </a></span>
                <span  className='icons'><a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF color="white" size={26} className="ico " />
                </a></span>
                <span className='icons'> <a 
                href="https://github.com/Satyam1923/Spring-Music-Player">
                <FaGithub color="white" size={26} className="ico"/>
                </a>
                </span>
        </div>
</div>
<div class="divider md:h-[1.5px] sm:h-[1px] "></div>
<div className='sec4 md:p-3 sm:text-[10px]'>
© Spring Ltd. {currentYear}, All Rights Reserved
</div>
        </div>
  )
}

export default Footer
