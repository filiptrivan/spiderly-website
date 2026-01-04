import {
  CTASection,
  FeaturesSection,
  HeroSection,
  PricingSection,
  ProcessSection,
  ReviewsSection,
} from '@/components/sections';
import Companies from '@/components/sections/companies';
import { Explanation } from '@/components/sections/explanation';

const HomePage = async () => {
  return (
    <div>
      <HeroSection />
      <Companies />
      <Explanation />
      <FeaturesSection />
      <ProcessSection />
      <PricingSection />
      <ReviewsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
