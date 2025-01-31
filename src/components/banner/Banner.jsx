
import BannerImg from '../../assets/banner.png'
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/Animate";

const Banner = () => {
  return (
    <>
        <div className="container py-14">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* image section */}
           <div className="flex flex-col justify-center">
           <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={BannerImg}
              alt=""
              className="w-[95%] md:w-full mx-auto"
            />
           </div>
           {/* text section */}
           <div className="flex flex-col justify-center space-y-5 md:max-w-[500px]">
                <motion.h1 
                variants={SlideUp(0.2)}
                initial="initial"
                whileInView="animate"
                className='text-4xl font-bold'>We Believe that a team makes any project better</motion.h1>
                <motion.p 
                variants={SlideUp(0.4)}
                initial="initial"
                whileInView="animate"
                className="text-gray-500 text-sm leading-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit earum accusantium tempore nam aliquid</motion.p>

                <motion.div 
                variants={SlideUp(0.6)}
                initial="initial"
                whileInView="animate"
                className='flex  gap-3'>
                   <div className='max-w-[80px] space-y-2'>
                    <p className='text-3xl font-bold'>15</p>
                    <p className='text-gray-500 text-sm '>Years Experience</p>
                   </div>
                   <div className='max-w-[80px] space-y-2'>
                    <p className='text-3xl font-bold'>350</p>
                    <p className='text-gray-500 text-sm'>Satisfy Clients</p>
                   </div>
                   <div className='max-w-[80px] space-y-2'>
                    <p className='text-3xl font-bold'>35</p>
                    <p className='text-gray-500 text-sm'>Award Winner</p>
                   </div>
                </motion.div>

                <div>

                <button className='primary-btn uppercase'>Discover Now</button>
                </div>
           </div>
            </div>  
        </div>
    </>
  )
}

export default Banner