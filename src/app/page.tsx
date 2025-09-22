import { Hero } from '@/components';
import {
  AboutUsSection,
  DescriptionSection,
  Events,
  InfoMinistries,
  Sermons,
} from '@/components/sections';

export default function Home() {
  return (
    <>
      <Hero />
      <DescriptionSection />
      <AboutUsSection />
      <InfoMinistries />
      <Events />
      <Sermons />
    </>
  );
}
