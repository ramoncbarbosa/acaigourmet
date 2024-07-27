// HeaderSection.tsx
import acai from "../../../public/Background/acai.png";
import { SocialButtons } from "../SocialButtons/SocialButtons";

export function HeaderSection() {
  return (
    <div className="relative z-10 flex flex-row justify-between mx-[76px] flex-grow">
      <div className="flex flex-col items-start text-center">
        <h2 className="text-colorThree font-montserratAlt font-extrabold text-[100px]">
          Açaí
        </h2>
        <p className="text-colorFour font-montserratAlt text-[20px]">Fulano</p>
        <p className="font-montserratAlt text-[20px]">O melhor da cidade.</p>
      </div>

      <div className="flex justify-center items-center mb-[80px]">
        <img src={acai} alt="Açaí" className="mr-[100px]" />
      </div>
      
      <div className="flex flex-col items-center mt-[40px]">
        <SocialButtons />
      </div>
    </div>
  );
}
