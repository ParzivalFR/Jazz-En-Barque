import Logo from "@/public/logo-1.png";
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

export default function Header({ src, className, width, height }) {
  return (
    <header className="relative w-full">
      <div className="w-full xl:h-svh relative">
        <Image
          src={src}
          alt="Image du festival Jazz en Barque"
          width={1920}
          height={1080}
          className="w-full object-cover"
          loading="lazy"
        />
        <div className={className}>
          <Image
            src="https://res.cloudinary.com/dbiqwsnu1/image/upload/v1717880016/logo-1_qejo4m.png"
            alt="Logo du festival Jazz En Barque"
            width={width}
            height={height}
            className="w-40 sm:w-60 lg:w-80"
            loading="lazy"
          />
        </div>
      </div>
      <div className="absolute top-6 right-10 lg:top-16 lg:right-24">
        <BurgerMenu />
      </div>
    </header>
  );
}
