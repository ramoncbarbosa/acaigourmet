// BackgroundSVG.tsx
import bg from "../../../public/Background/bg.svg";

export function BackgroundSVG() {
  return (
    <div
      className="absolute z-0 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${bg})`,
        top: '765px',
        left: '0', 
        right: '0', 
        bottom: '0', 
      }}
    ></div>
  );
}
