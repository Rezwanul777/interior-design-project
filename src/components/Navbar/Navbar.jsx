import logo  from '../../assets/logo.png'
import { motion } from "framer-motion";


const NavLinks = [
    {
      id: 1,
      title: "About",
      
    },
    {
      id: 2,
      title: "Services",
     
    },
    {
      id: 3,
      title: "Project",
      
    },
    {
      id: 4,
      title: "Contact",
      
    },
  ];

const Navbar = () => {
  return (
   <>
   <motion.div 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
   
   className="container py-4 flex items-center justify-between">
    {/* logo section */}
   <div className='flex items-center gap-3'>
   <img src={logo} alt="" className='size-10'/>
   <span className='text-2xl font-bold'>Interior</span>
   </div>
    {/* link section */}
    <div className='hidden md:block'>
        {
            NavLinks.map(link => (
                <a href="#" key={link.id} className='mx-4 text-lg font-semibold'>{link.title}</a>
            ))
            
 
        }
    </div>
    {/* button section */}
    <div>
        <button className='primary-btn'>Try for free</button>
    </div>
   </motion.div>
   </>
  )
}

export default Navbar
