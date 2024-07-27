import acai from "../../../public/Main/acai.png";
import facebook from "../../../public/Main/facebook.svg";
import instagram from "../../../public/Main/instagram.svg";
import whatsapp from "../../../public/Main/whatsapp.svg";

export function Background() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex flex-row justify-between mx-[76px] flex-grow">
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

        <div className="flex flex-col items-center mt-[64px] space-y-[30px]">
          <button className="rounded-full w-[50px] h-[50px] bg-colorThree flex items-center justify-center">
            <img src={facebook} alt="Facebook" className="w-[30px] h-[30px] text-white" />
          </button>
          <button className="rounded-full w-[50px] h-[50px] bg-colorThree flex items-center justify-center">
            <img src={instagram} alt="Instagram" className="w-[30px] h-[30px] text-white" />
          </button>
          <button className="rounded-full w-[50px] h-[50px] bg-colorThree flex items-center justify-center">
            <img src={whatsapp} alt="WhatsApp" className="w-[30px] h-[30px] text-white" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 mx-[76px] mb-[140px] mr-[64.1px] w-[293px] h-[134px] flex items-center justify-end">
        <div className="flex items-center">
          <img src="" alt="" className="mr-[10px]" />
          <p className="font-normal text-[26px] font-montserratAlt">
            Rua Calorina do Norte, Bairro Araguáia, N° 530
          </p>
        </div>
      </div>
    </div>
  );
}
