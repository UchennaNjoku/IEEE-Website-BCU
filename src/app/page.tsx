"use client"
import Image from 'next/image'
import SentinelBackground from "../resources/SentinelBackground.png";
import AboutUs from "../resources/AboutUs.png";
import Nurse from "../resources/Nurse.png";
import Doctor from "../resources/Doctor.png";
import CNA from "../resources/CNA.png";
import PA from "../resources/PA.png";
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"


export default function Home() {
  return (
    <>
      <div className='bg-gradient-to-br  from-[#eff5fa] to-[#9eefff] relative'>
        <div className='absolute top-0 left-0 w-full h-full z-10'>
            <Image src={SentinelBackground} className='hidden md:block absolute top-48 -right-80 ' alt='squad' width={1200} height={300}/>
        </div>
        
        <div className='pt-32 lg:pt-40 2xl:pt-32 pl-6 lg:pl-10 xl:pl-16 2xl:pl-24 mb-40 md:mb-60 lg:mb-72 w-full'>

          <div className='flex flex-col  text-[#7e7e7e]'>
            <div className='text-lg md:text-2xl lg:text-3xl font-excon'>Welcome to Sentinel Staffing Solutions</div>
              <div className='text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold xl:font-black font-inter bg-gradient-to-r from-[#979797] to-[#e6ebef] text-transparent bg-clip-text'>
                Healthcare Staffing <br/>Simplified.
              </div>
            <div className='text-base md:text-xl lg:text-2xl font-excon'>matching healthcare professionals to their next oppurtunity</div>  
            <div className='mt-3  rounded-2xl'>
              <form action="/" className='rounded-2xl'>
                <div className='w-2/3' >
                <input type="text" name="search" placeholder="Enter your email" className='rounded-2xl font-excon text-gray-500 bg-white p-2 '/>
                <input type="submit" value="start now" className='rounded-3xl  px-4 py-2 bg-[#005F55] hover:bg-gray-600 cursor-pointer text-white font-excon'/>
                </div>
              </form>
            </div>
          </div>
        </div>
      


        <div className='bg-gradient-to-r from-[#061B25] to-[#52585d] rounded-3xl w-screen h-fit p-6 md:p-10 z-20 relative'>
            <p className='text-white font-inter font-medium text-lg md:text-2xl xl:text-3xl mb-6 w-screen  flex justify-center'>Our Expertise Makes the Difference</p>

            <div className='p-3 w-screen h-1/2'>
              <p className='font-inter font-medium text-base md:text-lg lg:text-xl xl:text-2xl lg:ml-8 text-gray-300'>providing solutions for:</p>

              <div className='w-screen mt-4 px-16 z-30'>

                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full mb-10"
                  
                  >
                  <CarouselContent className=''>

                    <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3">
                     
                      <div>
                          <Card className="border-none bg-gradient-to-b rounded-2xl from-[#676F74] to-[#061B25]">
                            <CardContent className="aspect-square overflow-hidden flex justify-center relative h-full w-full ">
                              

                              <Image src={Nurse} className=' absolute -bottom-6 -right-4 w-10/12' alt="Sentinel Logo" />
                             
                            
                            </CardContent>
                          </Card>
                      </div>
                      <div className='text-white font-inter font-medium text-xl md:text-2xl text-center mt-4'>Nurses</div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3">
                     
                      <div>
                          <Card className="border-none flex flex-col justify-center items-center bg-gradient-to-b rounded-2xl from-[#676F74] to-[#061B25]">
                            <CardContent className="aspect-square overflow-hidden flex justify-center relative h-full w-full ">
                              

                              <Image src={Doctor} className=' absolute -bottom-6 -right-4 w-10/12' alt="Sentinel Logo" />
                             
                            
                            </CardContent>
                          </Card>
                      </div>
                      <div className='text-white font-inter font-medium text-xl md:text-2xl text-center mt-4'>Doctors</div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3">
                     
                      <div>
                          <Card className="border-none flex flex-col justify-center items-center bg-gradient-to-b rounded-2xl from-[#676F74] to-[#061B25]">
                            <CardContent className="aspect-square overflow-hidden flex justify-center relative h-full w-full ">
                              

                              <Image src={PA} className=' absolute bottom-0 -right-4 w-10/12 md:w-11/12' alt="Sentinel Logo" />
                             
                            
                            </CardContent>
                          </Card>
                      </div>
                      <div className='text-white font-inter font-medium text-xl md:text-2xl text-center mt-4'>PAs</div>
                    </CarouselItem>
                    <CarouselItem className="basis-1/2 md:basis-1/2 lg:basis-1/3">
                     
                      <div>
                          <Card className="border-none flex flex-col justify-center items-center bg-gradient-to-b rounded-2xl from-[#676F74] to-[#061B25]">
                            <CardContent className="aspect-square overflow-hidden flex justify-center relative h-full w-full ">
                              

                              <Image src={CNA} className=' absolute -bottom-10 md:-bottom-16 -right-4 w-10/12' alt="Sentinel Logo" />
                             
                            
                            </CardContent>
                          </Card>
                      </div>
                      <div className='text-white font-inter font-medium text-xl md:text-2xl text-center mt-4'>CNAs</div>
                    </CarouselItem>
                    
                  </CarouselContent>
              
                </Carousel>
              </div>
            </div>

        </div>

        <div className='p-3 bg-gradient-to-br  from-[#eff5fa] to-[#9eefff]'> 


          <p className='font-inter p-4 md:p-10 font-medium text-2xl md:text-2xl lg:text-3xl tracking-tight text-sentinel-green'>About Us</p>
          <div className='w-screen flex flex-row items-center justify-center'>
            <div className='ml-8  w-1/3'>

              <Image className='w-72   rounded-xl' src={AboutUs} alt={"About Image"}/>
            </div>
            <div className='rounded-2xl mr-4 px-20 p-8 bg-gradient-to-r h-fit from-[#eeeeee] to-[#c4d2d8] w-4/5 md:w-1/2 lg:w-3/5'>
              <p className='text-[#7e7f81] font-inter tracking- font-medium text-xl md:text-xl lg:text-xl xl:text-2xl mb-6'>We are a team of experienced healthcare professionals who have worked in the industry for years. We understand the challenges that come with finding the right job or the right candidate. We are here to help you find the right fit.</p>
            </div>
          </div>
          <p className='font-inter p-4 md:p-10 font-medium text-2xl md:text-2xl lg:text-3xl tracking-tight text-sentinel-green'>Contact</p>
          <div className='w-screen flex justify-center'>
            <div className='rounded-2xl p-8 bg-gradient-to-r  from-[#eeeeee] to-[#c4d2d8] w-4/5 md:w-1/2 lg:w-3/5'>
              <p className='text-[#7e7f81] font-inter tracking- font-medium text-xl md:text-xl lg:text-xl xl:text-2xl mb-6'>Seeking healthcare talent or your next career move? Contact us to explore staffing opportunities today! <br/><br/>
(559)-930-2016.<br/>info@sentinelstaffingsolutions.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


