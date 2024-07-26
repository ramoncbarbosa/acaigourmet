import acai from "../../../public/Main/acai.png"

export function Background() {
  return (
    <div className="flex flex-row justify-between mr-[76px] ml-[76px]">
      <div className="flex flex-col items-start mt-[62px] text-center">
        <h2 className="text-colorThree font-montserratAlt font-extrabold text-[100px]">
          Açaí
        </h2>
        <p className="text-colorFour font-montserratAlt text-[20px]">Fulano</p>
        <p className="font-montserratAlt text-[20px]">O melhor da cidade.</p>
      </div>
      <div className="flex justify-center items-center">
        <img src={acai} alt="Açaí" className="mr-[100px]"/>
      </div>
      <div className="mt-[64px]">
        <button className="rounded-full w-[50px] h-[50px] bg-colorThree flex flex-col mb-[30px]"></button>
        <button className="rounded-full w-[50px] h-[50px] bg-colorThree flex flex-col mb-[30px]"></button>
        <button className="rounded-full w-[50px] h-[50px] bg-colorThree flex flex-col mb-[30px]"></button>
      </div>
    </div>
  )
}