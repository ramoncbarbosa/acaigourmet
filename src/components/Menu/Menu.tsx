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
    <div className="absolute top-0 right-0 bg-white shadow-lg rounded-lg p-4 border z-50 w-[508px] h-[887px] opacity-100">
      <div className="flex justify-between items-center mb-4">
        <p className="text-[22px] font-semibold text-colorThree mt-[57px] ml-[22px]">Seu Carrinho!</p>
        <button onClick={onClose} className="rounded-full w-[40px] h-[40px] bg-colorTwo border-2 border-colorFour mt-[50px] mr-[20px] flex items-center justify-center">
          <img src={closed} alt="fechar menu" className="w-[16px] h-[16px]" />
        </button>
      </div>
      <div className="p-[20px] space-y-4">
        {acaiItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <img src={acai} alt="img de acai" className="w-[65px] h-[114px]" />
            <div className="flex-grow">
              <h3 className="font-semibold text-colorThree text-[22px]">{item.title}</h3>
              <p className="text-colorThree font-normal">{item.description}</p>
            </div>
            <div className="text-right">
              <p className="text-[16px] font-semibold">{item.size}</p>
              <p className="text-[22px] font-semibold text-colorFour whitespace-nowrap">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-[40px] pl-[24px] flex justify-between items-center">
        <div className="space-y-2">
          <p className="text-colorThree font-semibold text-[18px]">Compra:</p>
          <p className="text-colorThree font-semibold text-[18px]">Desconto:</p>
          <p className="text-colorThree font-semibold text-[18px]">Taxa de Entrega:</p>
          <p className="text-colorThree font-semibold text-[18px]">Total:</p>
        </div>
        <div className="space-y-2 text-right mr-[20px]">
          <p className="text-colorFour font-semibold text-[18px] whitespace-nowrap">R$ 36,00</p>
          <p className="text-colorFour font-semibold text-[18px] whitespace-nowrap">R$ 00,00</p>
          <p className="text-colorFour font-semibold text-[18px] whitespace-nowrap">R$ 00,00</p>
          <p className="text-colorFour font-semibold text-[18px] whitespace-nowrap">R$ 36,00</p>
        </div>
      </div>
      <div className="flex justify-center pt-[40px]">
        <button className="w-[199px] h-[30px] bg-colorFour rounded-full">
          <p className="font-medium font-montserratAlt text-[16px]">Efetuar o pagamento</p>
        </button>
      </div>
    </div>
  );
}
