import location from "../../../public/Background/location.svg";

export function AddressSection() {
  return (
    <div className="absolute right-0 top-[600px] w-[293px] h-[134px] mr-[70px] flex items-center">
      <img src={location} alt="Location" className="mr-[20px] mb-[70px]" />
      <p className="font-normal text-[26px] font-montserratAlt">
        Rua Uma Aí, Bairro Aquele Lá, N° xxx
      </p>
    </div>
  );
}
