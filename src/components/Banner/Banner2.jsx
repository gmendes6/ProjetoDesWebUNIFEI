import React from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

const Banner2 = () => {
  return (
    <div className="container my-14">
      <div className="bg-[#f9f9f9] py-14 md:py-24 flex justify-center items-center">
        {/* brand info */}
        <div className="flex flex-col justify-center text-center space-y-8 lg:px-44">
          <motion.h1
            variants={SlideLeft(0.5)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-bold uppercase"
          >
            Garanta 20% de desconto no primeiro mês de contrato
          </motion.h1>
          <motion.p
            variants={SlideLeft(0.7)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className=""
          >
            Vamos garantir que você receba os melhores produtos e da melhor qualidade para o seu treino.
          </motion.p>
          <motion.div
            variants={SlideLeft(0.9)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            <button className="primary-btn">Entre em contato</button>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
