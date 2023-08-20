import { Button, ShoeCard } from "../components";
import { shoes, statistics } from "../constants";
import { arrowRight } from "../src/assets/icons";
import { bigShoe1 } from "../src/assets/images";
import { useState } from "react";

function Hero() {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  const changeBigShoeImageHandler = (img: string) => {
    setBigShoeImage(img);
  };

  return (
    <section
      className="xl:padding-l wide:padding-r padding-b w-full border-2 border-red-500 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      id="home"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-slate-gray font-montserrat text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => {
            return (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <p className="leading-7 text-slate-gray font-montserrat">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImage}
          alt="shoe_collection"
          width={610}
          height={500}
          className="object-contain z-10 relative"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((item) => {
            return (
              <div key={item.bigShoe}>
                <ShoeCard
                  imgUrl={item}
                  changeBigShoeImage={changeBigShoeImageHandler}
                  bigShoeImage={bigShoeImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
