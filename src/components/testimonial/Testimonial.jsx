import {  motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/Animate";

const TestimonialData = [
  {
    id: 1,
    name: "John Doe",
    designation: "Designer",
    img: "https://i.pravatar.cc/300?img=1",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Alex",
    designation: "Developer",
    img: "https://i.pravatar.cc/300?img=2",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.4,
  },
  {
    id: 3,
    name: "George",
    designation: "Manager",
    img: "https://i.pravatar.cc/300?img=3",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    delay: 0.6,
  },
];

const Testimonial = () => {
  return (
    <>
      <div className="py-14">
        {/* Hedaing and text */}
        <div className="flex flex-col justify-center items-center gap-4 text-center mx-auto mb-8">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-4xl font-semibold"
          >
            Words from our coustomers
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-sm text-gray-500 md:max-w-[300px]"
          >
            Bring your dream home to life with one-on-one design help & hand
            picked products.
          </motion.p>
        </div>
        {/* cards section */}
        <div className="bg-black py-12">
          <div className="container grid grid-cols-1 md:grid-cols-3 gap-7">
            {TestimonialData.map((card) => {
              return (
                <motion.div
                  key={card.id}
                  variants={SlideLeft(card.delay)}
                  initial="initial"
                  whileInView="animate"
                  className="border-[1px] border-gray-500 px-5 py-10 text-white group hover:bg-white duration-300"
                >
                  <div className="flex flex-row items-center gap-5">
                    <img
                      src={card.img}
                      alt=""
                      className="object-cover w-[60px] rounded-full"
                    />

                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-black">
                        {card.name}
                      </h3>
                      <p className="text-sm text-gray-500 group-hover:text-black">
                        {card.designation}
                      </p>
                      <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  {/* Bottom section */}
                  <div className="mt-5 border-t-2 border-gray-500/40 pt-5 group-hover:text-black">
                    <p className="text-gray-400 font-serif text-sm">
                      {card.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
