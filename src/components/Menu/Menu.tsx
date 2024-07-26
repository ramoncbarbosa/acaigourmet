import closed from "../../../public/Menu/closed.svg";
import acai from "../../../public/Menu/acai.svg";
import menuData from "./Menu.json"; 
import { useState } from "react";

interface AcaiItem {
  title: string;
  description: string;
  size: string;
  price: string;
}

interface MenuProps {
  onClose: () => void;
}

export default function Menu({ onClose }: MenuProps) {
  const [acaiItems, setAcaiItems] = useState<AcaiItem[]>(menuData);

  return (
    <div
      className="absolute top-0 right-0 bg-white shadow-lg rounded-lg p-4 border z-50"
      style={{
        width: '508px',
        height: '887px',
        opacity: '1',
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <p className="text-[22px] font-semibold text-colorThree mt-[57px] ml-[64px]">Seu Carrinho!</p>
        <button onClick={onClose} className="rounded-full w-[50px] h-[50px] bg-colorTwo border-2 border-colorFour mt-[50px] mr-[51px]">
          <img src={closed} alt="fechar menu" className="w-[16px] h-[28px] p-[11px]" />
        </button>
      </div>
      <div className="p-[20px] space-y-4">
        {acaiItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <img src={acai} alt="img de acai" className="w-[65px] h-[114px]" />
            <div>
              <h3 className="font-semibold text-colorThree text-[22px]">{item.title}</h3>
              <p className="text-colorThree font-normal">{item.description}</p>
            </div>
            <div>
              <p className="text-[16px] font-semibold">{item.size}</p>
              <p className="text-[22px] font-semibold text-colorFour ">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
