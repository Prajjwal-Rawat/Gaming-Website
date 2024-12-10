import React, { useRef, useState } from 'react'
import { TiLocationArrowOutline } from "react-icons/ti";

const BentoTilt = ({children, className = ''}) => {

    const [transformStyle, setTransformStyle] = useState('');

    const itemRef = useRef();

    const handleMouseMove = (e) => {
      if(!itemRef.current) return;

      const {left, top, width, height} = itemRef.current.getBoundingClientRect();
      const relativeX = (e.clientX - left) / width;
      const relativeY = (e.clientY - left) / height;

      const tiltX = (relativeY - 0.5) * 5;
      const tiltY = (relativeX - 0.5) * -5;

      const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
      setTransformStyle(newTransform);
    }

    const handleMouseLeave = () => {
       setTransformStyle('');
    }

    return (
        <div ref={itemRef} className={className}
        onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
        style={{transform: transformStyle}}
        >
            {children}
        </div>
    )
}


const BentoCard = ({src, title, description}) => {
    return (
        <div className='relative size-full'>
        <video className=' absolute left-0 top-0 size-full object-cover object-center'
        src={src}
        loop
        muted
        autoPlay
        />

        <div className=' relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
           <div>
            <h1 className='bento-title special-font'>{title}</h1>
            {
                description && (
                    <p className='mt-3 max-w-64 text-xs md:text-base'>
                        {description}
                    </p>
                )
            }
           </div>
        </div>
        </div>
    )
}

const Features = () => {
  return (
    <section className='bg-black pb-52'>
      <div className='container mx-auto px-3 md:px-10'>

        <div className='px-5 py-32'>
           <p className='font-circular-web text-lg text-blue-50'>
            Into The MetaGame Later
           </p>
         <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
            Immerse yourself in a rich and ever-expanding universe where a vibrant
            array of products converge into an interconnected overlay experience on your world.
         </p>
        </div>

      <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
        <BentoCard
        src = "videos/feature-1.mp4"
        title = {<>radi<b>A</b><b>n</b>t</>}
        description = "A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
        />
        </BentoTilt>

        <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
           <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
              <BentoCard
              src="videos/feature-2.mp4"
              title={<>zig<b>m</b>a</>}
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
              />
           </BentoTilt>

           <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
             <BentoCard
             src="videos/feature-3.mp4"
             title={<>N<b>e</b>xus</>}
             description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
             />
           </BentoTilt>

           <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
             <BentoCard
             src="videos/feature-4.mp4"
             title={<>Az<b>u</b>l</>}
             description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
             />
           </BentoTilt>

           <BentoTilt className='bento-tilt_2 border border-white'>
            <div className='flex size-full flex-col justify-between bg-white'>
                <video className=' relative'
                src='videos/thunder.mp4'
                autoPlay
                loop
                />
                <h1 className='bento-title absolute special-font max-w-64 lg:p-5 text-white'><b>M</b>ore <b>Co</b>ming S<b>oo</b>n !</h1>
                <TiLocationArrowOutline className='text-yellow-400 absolute lg:bottom-5 lg:right-8 bottom-3 right-2' size={40}/>
             </div>
           </BentoTilt>

           <BentoTilt className='bento-tilt_2'>
             <video className='size-full object-cover object-center'
             src='/videos/feature-5.mp4'
             loop
             muted
             autoPlay
             />
           </BentoTilt>
        </div>
      </div>
    </section>
  )
}

export default Features
