"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-[40%] left-[20%] w-[180px] h-[138px] p-[6px] rounded-3xl bg-[#5D6680]">
          <div className="relative flex items-center">
            <img src="arena-01.png" alt="people" className="w-full h-full object-cover" />
            <div className="w-6 h-6 absolute top-1/2 left-2 z-30">
              <img src="people-04.png" alt="people" className="w-full h-full" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 left-5 z-20">
              <img src="people-05.png" alt="people" className="w-full h-full" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 left-8 z-1">
              <img src="people-06.png" alt="people" className="w-full h-full" />
            </div>
            <div className="absolute h-6 top-1/2 left-16 text-white text-xs flex items-center">
              +264 has joined
            </div>
            <div className="absolute h-6 top-[75%] left-3 text-white text-base flex items-center font-bold">
              The Upside Down
            </div>
          </div>
        </div>

        <div className="absolute top-[10%] right-[30%] w-[180px] h-[138px] p-[6px] rounded-3xl bg-[#5D6680]">
          <div className="relative flex items-center">
            <img src="arena-02.png" alt="people" className="w-full h-full object-cover" />
            <div className="w-6 h-6 absolute top-1/2 left-2 z-30">
              <img src="people-04.png" alt="people" className="w-full h-full" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 left-5 z-20">
              <img src="people-05.png" alt="people" className="w-full h-full" />
            </div>
            <div className="w-6 h-6 absolute top-1/2 left-8 z-1">
              <img src="people-06.png" alt="people" className="w-full h-full" />
            </div>
            <div className="absolute h-6 top-1/2 left-16 text-white text-xs flex items-center">
              +264 has joined
            </div>
            <div className="absolute h-6 top-[75%] left-3 text-white text-base flex items-center font-bold">
              The Upside Down
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
