'use client'
import Image from 'next/image';
import spaceImage from './newbg.png'; // Adjust the path if your file structure is different
import asteroidTerrain from './fg.png'
import Link from 'next/link';
export default function Home() {
  // Inline style for the background image
  const backgroundStyle = {
    backgroundImage: `url(${spaceImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  
  const cardStyle = {
    transform: 'translate(-50%, -50%)', // Center the card
  }



  return (
    <div style={backgroundStyle} className='relative'>
      <div  className=' flex items-center justify-center'>
        <div className='pt-40 lg:pt-44 2xl:pt-48 pl-6 lg:pl-10 xl:pl-16 2xl:pl-24 mb-24 w-full flex justify-between'>
          <div className='flex flex-col text-[#505050]'>
            <div className='text-3xl md:text-5xl lg:text-6xl font-bold font-inter'>BCU Robotics Society</div>
            <div className='text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl font-bold max-w-4xl font-inter bg-gradient-to-r from-[#505050] to-[#84878a] text-transparent bg-clip-text'>
              IEEE Student Branch
            </div>
            <div className='text-lg md:text-2xl lg:text-3xl text-extrabold font-excon'>saving the planet, one robot at a time</div>  
          </div>

          <div style={{transform: 'scale(1.3)'}} className='flex justify-end flex-1'>
            <video autoPlay loop muted playsInline className='max-h-96'>
              <source src="./Robot.mp4" type="video/mp4" />
            </video>
          </div>

        </div>
      </div>
      <div className='relative h-full'>
        <Image alt={"Foreground"} src={asteroidTerrain} className='w-screen absolute z-10'/>
        <div style={cardStyle} className='text-center bg-[#474747] opacity-70 absolute z-20 top-80 left-1/2 p-10 rounded-2xl'>
          
          <h2 className='text-4xl font-light font-excon text-gray-300'>OUR PLAN</h2>
          <p className='text-gray-300 mt-7 text-2xl  font-inter'>&quot;Our plan is to deploy an advanced robot designed to protect and restore the environment. Equipped with cutting-edge technology, it will tackle pollution, aid in reforestation, and promote sustainability. Our goal is to make a real difference in the health of our planet, ensuring a greener, cleaner future for all. Join us in our mission to save the planet with innovation and action.&quot;</p>
          <h2 className='mt-5 mb-5'>_______________________________________________________________________________________________________</h2>
          <h2 className='text-4xl font-light font-excon text-gray-300'>ABOUT THE BOT</h2>
          <p className='text-gray-300 mt-7 text-2xl mb-5 font-inter'>&quot;Equipped with 360 degrees of freedom, several sensors and a fully functional mechanical arm, Our bot can withstand a plethora of terrains deciphering navigation and task execution through a variety of situations&quot;.</p>
          <Link href={"/team"} className='rounded-lg hover:bg-slate-500 cursor-pointer px-7 py-3 mt-10 w-fit outline outline-1 text-lg font-inter font-medium outline-white'>Meet the
           Team...</Link>
        </div>
      </div>
      {/* <Image alt={"Foreground"} src={asteroidTerrain} className='w-screen'/> */}
      
    </div>
    
  )
}
