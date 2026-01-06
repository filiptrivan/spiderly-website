import { CTASection, HeroSection, ReviewsSection, TechStackSection } from '@/components/sections';
import Companies from '@/components/sections/companies';
import { Explanation } from '@/components/sections/explanation/explanation';

const HomePage = async () => {
  return (
    <div className="mb-16 md:mb-20 lg:mb-28">
      <HeroSection />
      <Companies />
      <Explanation />
      <TechStackSection />
      <ReviewsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
