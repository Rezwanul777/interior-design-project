
import BannerImg from '../../assets/banner.png'


const Banner = () => {
  return (
    <>
        <div className="container py-14">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {/* image section */}
           <div className="flex flex-col justify-center">
                <img src={BannerImg} alt="banner" className='w-[95%] md:w-full mx-auto object-cover'/>
           </div>
           {/* text section */}
           <div className="flex flex-col justify-center space-y-5 md:max-w-[500px]">
                <h1 className='text-4xl font-bold'>We Believe that a team makes any project better</h1>
                <p className="text-gray-500 text-sm leading-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit earum accusantium tempore nam aliquid</p>

                <div className='flex  gap-3'>
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
                </div>

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