import { Button } from "../components";

function Subscribe() {
  return (
    <section
      className="padding-x sm:py-32 py-16 w-full flex max-container  items-center max-lg:flex-col gap-20"
      id="contact-us"
    >
      <h3 className="text-[46px] max-lg:text-[32px] leading-[68px]  font-palanquin font-bold flex-1 break-words">
        Sign Up For <span className="text-coral-red">Updates </span>& Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full ">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" className={`w-full text-white`} />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
