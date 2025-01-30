import heroPng from '../../../assets/hero.png'

const Hero = () => {
  return (
    <>
    <div className="container ">
       <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10">
            {/* text */}
            <div className='flex flex-col justify-center gap-7 md:pr-8 lg:pr-14 xl:pr-52 text-center md:text-left pt-20 px-10 md:pt-0'>
                <h1 className='text-4xl font-bold'> SKETCH LUXURY INTERIOR DESIGN</h1>
                <p className='text-lg text-gray-500'> Bring your dream to life with one-on-one design help & hand picked
                products tailored to your style, space and budget.</p>
                <div className='space-x-3'>
                    <button className='primary-btn uppercase shadow-[5x_5px_0px_0px_#6c6c6c] bg-black text-white'>Get Started</button>
                    <button className='primary-btn uppercase'>Contact Us</button>
                </div>
            </div>
            {/* image */}
            <div className='flex flex-col justify-center'>
                <img src={heroPng} alt="" className='w-[80%] md:w-[700px] object-cover '/>
            </div>
       </div>
    </div>
    
    </>
  )
}

export default Hero