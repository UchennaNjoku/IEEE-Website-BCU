'use client'
import Image from 'next/image';
import spaceImage from '../newbg.png'; // Adjust the path if your file structure is different
import asteroidTerrain from '../fg.png'
import team from './iee.jpg'

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
            <div className='text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl font-bold max-w-4xl font-inter bg-gradient-to-r from-[#505050] to-[#84878a] text-transparent bg-clip-text'>
              Meet Our Team
            </div>
            <div className='text-lg md:text-2xl lg:text-3xl text-extrabold font-excon'>see our members</div>  
          </div>

          <div style={{transform: 'scale(1.6)'}} className='flex justify-end flex-1'>
            <video autoPlay loop muted playsInline className='max-h-96'>
              <source src="./Moon.mp4" type="video/mp4" />
            </video>
          </div>

        </div>
      </div>
      <div className='relative h-full'>
        <Image alt={"Foreground"} src={asteroidTerrain} className='w-screen absolute z-10'/>
        <div style={cardStyle} className='text-center bg-[#474747] opacity-70 absolute z-20 top-80 left-1/2 p-10 rounded-2xl'>
            <Image alt={"Team"} src={team} className=''/>
        </div>
      </div>
      {/* <Image alt={"Foreground"} src={asteroidTerrain} className='w-screen'/> */}
      
    </div>
    
  )
}
