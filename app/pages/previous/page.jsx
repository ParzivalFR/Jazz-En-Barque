import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import PreviousGallery from "@/app/components/PreviousGallery";
import Spacing from "@/app/components/Spacing";
import ImgPrevious from "@/app/images/previous-editions.webp";

const page = () => {
  return (
    <>
      <Header
        src={ImgPrevious}
        width={300}
        height={300}
        className={"absolute z-10 left-8 top-2 w-20 md:w-36"}
      />
      <main className="relative xl:-top-52 h-svh">
        <PreviousGallery />
        <Spacing size={50} />
        <Footer />
      </main>
    </>
  );
};

export default page;