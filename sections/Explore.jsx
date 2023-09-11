"use client";
import { motion } from "framer-motion";
import { ExploreCard, TypingText, TitleText } from "../components";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";
import { useState } from "react";

const Explore = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title={"| The Worlds"} textStyles="text-center" />

        <TitleText
          title={
            <>
              Choose the world you want
              <br className="md:block hidden" />
              to explore
            </>
          }
          textStyles="text-center"
        />

        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, idx) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={idx}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
