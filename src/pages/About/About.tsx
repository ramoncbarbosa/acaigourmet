import { BackgroundSVG } from '../../components/BackgroundSVG/BackgroundSVG.tsx';
import { HeaderSection } from '../../components/HeaderSection/HeaderSection.tsx';
import { AddressSection } from '../../components/AddressSection/AddressSection.tsx';

export function About() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundSVG />
      <HeaderSection />
      <AddressSection />
    </div>
  );
}
