import { headerLogo } from "./../src/assets/images";
import { hamburger } from "./../src/assets/icons";
import { navLinks } from "../constants/index";

const Nav = () => {
  return (
    <header className="padding-x py-8 fixed bg-white opacity-70 z-[100] w-full border-1 border-blue-100">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger_button" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
