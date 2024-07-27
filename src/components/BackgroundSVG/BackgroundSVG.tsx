import bg from "../../../public/Background/bg.svg";

export function BackgroundSVG() {
  return (
    <div className="absolute inset-0 top-[calc(78%+80px)] z-0 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bg})` }}></div>
  );
}
