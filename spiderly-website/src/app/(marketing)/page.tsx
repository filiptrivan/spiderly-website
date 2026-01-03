import {
  HeroSection,
  FeaturesSection,
  ProcessSection,
  PricingSection,
  ReviewsSection,
  CTASection,
} from '@/components/sections';

const HomePage = async () => {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <PricingSection />
      <ReviewsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
