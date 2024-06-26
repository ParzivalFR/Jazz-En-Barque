"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { londrina } from "../fonts";
import Spacing from "./Spacing";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="relative z-10  h-auto rounded-full">
        <button
          aria-label="Open"
          name="Open"
          onClick={toggle}
          className="z-20 border border-black text-black flex justify-center items-center h-auto px-2 rounded-full bg-background hover:bg-yellow transition-colors duration-500 ease-in-out"
          title="Ouvrir le menu"
        >
          <IoIosMenu className="size-8 md:size-10" />
        </button>
        <span className="z-[-10] absolute top-[2px] -right-[2px] bg-yellow border border-black rounded-full h-auto px-2">
          <IoIosMenu className="size-8 md:size-10" />
        </span>
      </div>
      <Menu open={open}>
        <button
          aria-label="Close"
          className="absolute z-[910] top-6 right-6 lg:top-16 lg:right-24 text-5xl text-black cursor-pointer transition-transform duration-700 ease-in-out hover:rotate-180"
          title="Fermer le menu"
          onClick={toggle}
        >
          <MdOutlineClose className="bg-background border border-black p-1 rounded-full size-10 lg:size-18 text-black" />
        </button>
        <MenuContainer>
          <div className="flex justify-center items-start">
            <Image
              src="https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717880016/logo-1_qejo4m.png"
              alt="Logo de Jazz En Barque"
              width={500}
              height={500}
              className="w-40 sm:w-52"
              title="Logo de Jazz En Barque"
            />
          </div>
          <Spacing size={10} />
          <MenuItem href="/" onClick={toggle} title="Page d'Accueil">
            Accueil
          </MenuItem>
          <MenuItem
            href="/pages/informations"
            onClick={toggle}
            title="Page des Informations"
          >
            Infos Pratiques
          </MenuItem>
          <MenuItem
            href="/pages/history"
            onClick={toggle}
            title="Page de notre Histoire"
          >
            Notre Histoire
          </MenuItem>
          <MenuItem
            href="/pages/previous"
            onClick={toggle}
            title="Page des Editions Précédentes"
          >
            Editions Précédentes
          </MenuItem>
          <MenuItem
            href="/pages/contact"
            onClick={toggle}
            title="Pas de contact"
          >
            Contact
          </MenuItem>
        </MenuContainer>
      </Menu>
    </>
  );
}

/* Logic */
const style = {
  container: `flex flex-col gap-8 relative top-10 w-full text-start px-4 md:px-8 lg:px-12 xl:px-20 z-[900]`,
  item: `px-4 md:px-10 text-3xl text-background cursor-pointer transition hover:text-yellow duration-700 ease-in-out ${londrina.className}`,
  menu: {
    open: `h-svh w-full`,
    close: `w-0 h-svh`,
    default: `overflow-x-hidden overflow-y-auto transition-all duration-700 fixed z-50 top-0 right-0 bg-middleblue`,
  },
};

function Menu({ children, open }) {
  return (
    <div
      className={`${style.menu.default} 
      ${open ? style.menu.open : style.menu.close}`}
    >
      {children}
    </div>
  );
}

function MenuContainer({ children }) {
  return <div className={style.container}>{children}</div>;
}

function MenuItem({ children, href, onClick, title }) {
  return (
    <div>
      <Link href={href} className={style.item} onClick={onClick} title={title}>
        {children}
      </Link>
    </div>
  );
}
