import React from "react";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";

const EquipmentData = [
  {
    id: 1,
    title: "Professores graduados em Boxe",
    desc: "Nossos professores são altamente qualificados e experientes, oferecendo treinamento técnico e estratégico, desde iniciantes até competidores.",
    icon: <GrYoga />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Equipamentos para musculação",
    desc: "Oferecemos equipamentos de alta qualidade para treinos de hipertrofia, projetados para todos os níveis de condicionamento físico e objetivos. ",
    link: "/",
    icon: <FaDumbbell />,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Auxílio no treino e Suplementação",
    desc: "Fornecemos suporte completo com profissionais de educação física e orientação sobre suplementação para otimizar seus resultados.",
    link: "/",
    icon: <GiGymBag />,
    delay: 0.9,
  },
];

const Equipments = () => {
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-playfair">
          <div className="space-y-4 p-6">
            <h1 className="text-3xl md:text-4xl font-bold">
              O que temos a oferecer para você
            </h1>
            <p className="text-gray-500">
             Oferecemos treinos personalizados com profissionais qualificados, equipamentos modernos, suporte em suplementação, e um ambiente motivador para todos os níveis de condicionamento físico.
            </p>
          </div>
          {EquipmentData.map((item) => {
            return (
              <motion.div
                variants={SlideLeft(item.delay)}
                initial="hidden"
                whileInView="visible"
                key={item.id}
                className="bg-gray-100 space-y-4 p-6 hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)] "
              >
                <div className="text-4xl">{item.icon}</div>
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="text-gray-500">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Equipments;