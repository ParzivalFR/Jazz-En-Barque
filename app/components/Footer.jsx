import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="relative z-[20] w-full p-6 bg-darkblue flex justify-center items-center flex-col gap-4">
        <p className="text-center text-background text-base md:text-xl">
          © {currentYear} Jazz en Barque
        </p>
        <hr className="h-px border-background w-24" />
        <p className="text-background text-sm">
          Created with ❤️ by{" "}
          <Link
            href="https://www.gael-dev.fr/"
            target="_blank"
            className=" text-indigo-500 hover:text-indigo-300 transition duration-500 ease-in-out"
          >
            Gael RICHARD
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
