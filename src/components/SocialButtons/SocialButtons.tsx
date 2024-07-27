import facebook from "../../../public/Background/facebook.svg";
import instagram from "../../../public/Background/instagram.svg";
import whatsapp from "../../../public/Background/whatsapp.svg";

export function SocialButtons() {
  return (
    <div className="flex flex-col items-center space-y-[30px]">
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
  );
}
