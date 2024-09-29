import React from "react";
import { NavbarMenu } from "../../mockData/data";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav className="w-full bg-white"> 
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container mx-auto flex justify-between items-center py-8 px-4"
        >
          {/* Seção do logotipo */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <FaDumbbell />
            <p>Academia</p>
            <p className="text-secondary">Endofit</p>
          </div>

          {/* Seção do menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-primary font-semibold"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              {/* Novo Item: Segunda Página */}
              
            </ul>
          </div>

          {/* Seção dos ícones */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>
            {/* Você pode adicionar mais ícones aqui, se necessário */}
          </div>

          {/* Menu hamburguer (mobile) */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>
      </nav>

      {/* Menu lateral (mobile) */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;