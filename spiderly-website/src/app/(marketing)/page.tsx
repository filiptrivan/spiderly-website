import {
  CTASection,
  FounderSection,
  HeroSection,
  KeyBenefitsSection,
  TechStackSection,
} from '@/components/sections';
import Companies from '@/components/sections/companies';
import { Explanation } from '@/components/sections/explanation/explanation';
import { Button } from '@/components/ui/button';
import { VideoDialogButton } from '@/components/ui/video-dialog';
import Link from 'next/link';

const HomePage = async () => {
  return (
    <div className="mb-16 md:mb-20 lg:mb-28">
      <HeroSection
        title={
          <>
            .NET (C#) Web App Boilerplate{' '}
            <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
              Code Generator
            </span>
          </>
        }
        description="Spiderly is an open-source .NET (C#) code generator that transforms an EF Core model into a fully customizable .NET (C#) + Angular web application, automatically updating all boilerplate code as your model evolves."
        buttons={
          <>
            <Button asChild>
              <Link href={'/docs/getting-started'}>Get Started</Link>
            </Button>
            <VideoDialogButton />
          </>
        }
      />
      <Companies />
      <Explanation />
      <TechStackSection />
      <KeyBenefitsSection />
      {/* <ReviewsSection /> */}
      <FounderSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
