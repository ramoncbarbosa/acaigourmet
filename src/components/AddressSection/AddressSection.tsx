import location from "../../../public/Background/location.svg";

export function AddressSection() {
  return (
    <div className="absolute bottom-0 right-0 mx-[76px] mb-[140px] mr-[74.1px] w-[293px] h-[134px] flex items-center justify-end z-20">
      <img src={location} alt="Location" className="mr-[20px] mb-[70px]" />
      <p className="font-normal text-[26px] font-montserratAlt">
        Rua Uma Aí, Bairro Aquele Lá, N° xxx
      </p>
    </div>
  );
}