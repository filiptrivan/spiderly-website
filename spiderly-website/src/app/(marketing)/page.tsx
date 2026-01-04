import {
  CTASection,
  FeaturesSection,
  HeroSection,
  PricingSection,
  ProcessSection,
  ReviewsSection,
} from '@/components/sections';
import Companies from '@/components/sections/companies';

const HomePage = async () => {
  return (
    <div>
      <HeroSection />
      <Companies />
      <FeaturesSection />
      <ProcessSection />
      <PricingSection />
      <ReviewsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
