"use client";

import ImgAlgea from "@/app/icons/algae.svg";
import ImgLeafDark from "@/app/icons/leaf-dark.svg";
import Img1 from "@/app/images/1-min.webp";
import Img10 from "@/app/images/10-min.webp";
import Img11 from "@/app/images/11-min.webp";
import Img12 from "@/app/images/12-min.webp";
import Img13 from "@/app/images/13-min.webp";
import Img14 from "@/app/images/14-min.webp";
import Img15 from "@/app/images/15-min.webp";
import Img16 from "@/app/images/16-min.webp";
import Img17 from "@/app/images/17-min.webp";
import Img18 from "@/app/images/18-min.webp";
import Img2 from "@/app/images/2-min.webp";
import Img3 from "@/app/images/3-min.webp";
import Img4 from "@/app/images/4-min.webp";
import Img5 from "@/app/images/5-min.webp";
import Img6 from "@/app/images/6-min.webp";
import Img7 from "@/app/images/7-min.webp";
import Img8 from "@/app/images/8-min.webp";
import Img9 from "@/app/images/9-min.webp";
import Image from "next/image";
import { useState } from "react";
import { londrina } from "../fonts";
import ImageModal from "./ImageModal";
import Spacing from "./Spacing";

const PreviousGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
    Img17,
    Img18,
  ];

  const handleShow = (img) => {
    setSelectedImage(img);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrevious = () => {
    const index = images.indexOf(selectedImage);
    if (index > 0) {
      setSelectedImage(images[index - 1]);
    } else if (index === 0) {
      setSelectedImage(images[images.length - 1]);
    }
  };

  const handleNext = () => {
    const index = images.indexOf(selectedImage);
    if (index < images.length - 1) {
      setSelectedImage(images[index + 1]);
    } else if (index === images.length - 1) {
      setSelectedImage(images[0]);
    }
  };

  return (
    <section className="wave-background z-[20] flex flex-col items-center gap-48 w-full h-auto bg-background pt-10 px-4">
      <h1
        className={`${londrina.className} text-darkblue text-center text-4xl sm:text-6xl`}
      >
        Editions précédentes
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg w-full bg-black h-[290px]"
          >
            <Image
              src={img}
              alt={`image du festival numéro-${index}`}
              width={500}
              height={500}
              className="w-full h-full object-cover"
              onClick={() => handleShow(img)}
            />
          </div>
        ))}
      </div>
      <Spacing size={50} />
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={handleClose}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
      <div className="absolute -bottom-16 right-6 lg:right-24 2xl:right-36 z-[-100] flex gap-6 md:gap-20 lg:gap-32">
        <Image src={ImgAlgea} alt="Algea" width={50} height={50} />
        <Image src={ImgLeafDark} alt="Leaf" width={100} height={100} />
      </div>
    </section>
  );
};

export default PreviousGallery;
