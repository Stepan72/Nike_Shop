import { Button } from "../components";
import { offer } from "../src/assets/images";
import { arrowRight } from "../src/assets/icons";

function SpecialOffer() {
  return (
    <section className="padding flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span>Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embarkon a shopping journey that redifines your experience with
          unbeatable deals. From Premier selections to incredible savings, we
          offer unparalled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of possibilities designed to fulfill your uniq
          desires, surpasses the loftiest expectations. Your journey with us is
          nothing short of exeptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4 justify-center lg:justify-start">
          <Button
            label="Shop Now"
            iconUrl={arrowRight}
            className="text-white"
          />
          <Button
            label="Learn More"
            className={`bg-white border-slate-gray text-slate-gray`}
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
