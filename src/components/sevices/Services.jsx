import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";

import { motion } from "framer-motion";
import { SlideUp } from "../../animation/Animate";

const ServiceCard = [
  {
    id: 1,
    title: "Luxury Facilities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
    icon: <FaVectorSquare />,

    delay: 0.2,
  },
  {
    id: 2,
    title: "Quality Products",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
    icon: <FaPenToSquare />,

    delay: 0.4,
  },
  {
    id: 3,
    title: "Affordable Price",
    description:
      "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    icon: <BiSolidDollarCircle />,

    delay: 0.6,
  },
];

const Services = () => {
  return (
    <>
      <div className="container py-20">
        {/* Hedaing and text */}
        <div className="flex flex-col justify-center gap-4 md:w-[300px] items-center text-center mx-auto mb-8">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            className="text-3xl font-semibold"
          >
            What we provide
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView={"animate"}
            className="text-sm text-gray-500"
          >
            We offer a variety of custom interior design services, from small to
            large spaces.
          </motion.p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ServiceCard.map((card) => (
            <motion.div
              key={card.id}
              variants={SlideUp(card.delay)}
              initial="initial"
              whileInView={"animate"}
              className="flex flex-col space-y-5 border border-1 border-black/30 px-6 py-12 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
            >
              <span className="text-2xl border-[1px] border-black w-12 h-12 flex items-center justify-center rounded-full">
                {" "}
                {card.icon}
              </span>
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-sm text-gray-500">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
