import { CTASection, HeroSection, ReviewsSection } from '@/components/sections';
import Companies from '@/components/sections/companies';
import { Explanation } from '@/components/sections/explanation/explanation';

const HomePage = async () => {
  return (
    <div>
      <HeroSection />
      <Companies />
      <Explanation />
      <ReviewsSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
