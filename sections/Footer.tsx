import { footerLinks, socialMedia } from "../constants";
import { footerLogo } from "../src/assets/images";

function Footer() {
  return (
    <footer className="padding-x padding-t pb-8 bg-black max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start ">
          <a href="/">
            <img src={footerLogo} alt="footer-log" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for new term at youe neares Nike store. Find Your
            perfect Size in Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-6 self-center">
            {socialMedia.map((item) => {
              return (
                <div
                  key={item.alt}
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full "
                >
                  <img src={item.src} alt={item.alt} width={24} height={24} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => {
            return (
              <div key={section.title}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => {
                    return (
                      <li
                        className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                        key={link.name}
                      >
                        <a href={link.link}>{link.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-start">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <p className="break-words">
            © Made by Stepan Nimchuk. All Rights Reserved.
          </p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions </p>
      </div>
    </footer>
  );
}

export default Footer;
