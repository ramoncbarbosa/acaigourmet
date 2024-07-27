import prato1 from "../../../public/SectionExhibtion/prato1.svg";
import prato2 from "../../../public/SectionExhibtion/prato2.svg";
import prato3 from "../../../public/SectionExhibtion/prato3.svg";

export default function SectionExhibition() {
  return (
    <div className="text-center relative mt-[147px] z-10">
      <h4 className="font-montserratAlt text-[32px] font-semibold text-colorThree">
        Benefícios ao adiquirir o nosso produto
      </h4>
      <p className="font-medium text-[20px] font-montserratAlt text-colorThree mt-[8px]">
        O açaí é uma fruta originária da região amazônica e é <br />
        conhecido por oferecer uma série de benefícios à saúde.
      </p>

{/* ////////////////////////////////////////////////////// */}

      <div className="flex justify-center gap-[29px] mt-[120px]">
        <div className="rounded-full bg-colorTwo">
          <img src={prato1} alt="Prato 1" className="w-[247px] h-[436px] rounded-[134px_0_0_0]" />
          
        </div>
        
        <div className="rounded-full bg-colorTwo">
          <img src={prato2} alt="Prato 1" className="w-[247px] h-[436px] rounded-[134px_0_0_0]" />
        </div>
        <div className="rounded-full bg-colorTwo">
          <img src={prato3} alt="Prato 1" className="w-[247px] h-[436px] rounded-[134px_0_0_0]" />
        </div>
      </div>

{/* ////////////////////////////////////////////////////// */}


    </div>
  );
}
