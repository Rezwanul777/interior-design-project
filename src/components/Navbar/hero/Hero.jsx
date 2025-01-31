import heroPng from '../../../assets/hero.png'
import { motion } from "framer-motion";
import { SlideUp } from "../../../animation/Animate";
const Hero = () => {
  return (
    <>
    <div className="container ">
       <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10">
            {/* text */}
            <div className='flex flex-col justify-center gap-7 md:pr-8 lg:pr-14 xl:pr-52 text-center md:text-left pt-20 px-10 md:pt-0'>
                <motion.h1 
                variants={SlideUp(0.2)}
                initial="initial"
                animate="animate"
                
                className='text-4xl font-bold'> SKETCH LUXURY INTERIOR DESIGN</motion.h1>
                <motion.p 
                 variants={SlideUp(0.5)}
                 initial="initial"
                 animate="animate"
                className='text-lg text-gray-500'> Bring your dream to life with one-on-one design help & hand picked
                products tailored to your style, space and budget.</motion.p>
                <div className='space-x-3'>
                    <button className='primary-btn uppercase shadow-[5x_5px_0px_0px_#6c6c6c] bg-black text-white'>Get Started</button>
                    <button className='primary-btn uppercase'>Contact Us</button>
                </div>
            </div>
            {/* image */}
            <div className='flex flex-col justify-center'>
                <motion.img 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                src={heroPng} alt="" className='w-[80%] md:w-[700px] object-cover '/>
            </div>
       </div>
    </div>
    
    </>
  )
}

export default Hero