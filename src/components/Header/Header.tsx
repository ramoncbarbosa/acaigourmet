import logo from "../../../public/Header/logo.svg";
import car from "../../../public/Header/car.svg";
import { useState } from "react";
import Menu from "../Menu/Menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="relative flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex-none pl-[64px]">
        <img src={logo} alt="logo do projeto" className="w-[76.1px] h-[58.26px]" />
      </div>
      <div className="flex-1 text-center font-montserratAlt">
        <p className="inline-block mx-4 text-[26px] text-colorThree font-medium">Sobre</p>
        <p className="inline-block mx-4 text-[26px] text-colorThree font-medium">Produto</p>
        <p className="inline-block mx-4 text-[26px] text-colorThree font-medium">FAQ</p>
      </div>
      <div className="flex-none pr-[64px]">
        <button
          onClick={toggleMenu}
          className="bg-colorTwo rounded-full w-[50px] h-[50px] border-2 border-colorFour flex items-center justify-center"
        >
          <img src={car} alt="icon do carrinho" className="w-[24px] h-[24px]" />
        </button>
        {isMenuOpen && <Menu onClose={toggleMenu} />}
      </div>
    </header>
  );
}
