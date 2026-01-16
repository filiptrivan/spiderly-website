import {
  CTASection,
  FounderSection,
  HeroSection,
  KeyBenefitsSection,
  TechStackSection,
} from '@/components/sections';
import Companies from '@/components/sections/companies';
import { Explanation } from '@/components/sections/explanation/explanation';
import { BeamButton } from '@/components/ui/beam-button';
import { VideoDialogButton } from '@/components/ui/video-dialog';
import Link from 'next/link';

const HomePage = async () => {
  return (
    <div className="">
      <HeroSection
        title={
          <>
            .NET (C#) Web App Boilerplate{' '}
            <span className="text-transparent bg-linear-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
              Code Generator
            </span>
          </>
        }
        description="Spiderly is a free open-source .NET (C#) code generator that transforms an EF Core model into a fully customizable .NET (C#) + Angular web application, automatically updating all boilerplate code as your model evolves."
        buttons={
          <>
            <BeamButton asChild>
              <Link href={'/docs/getting-started'}>Get Started</Link>
            </BeamButton>
            <VideoDialogButton />
          </>
        }
      />
      <Companies />
      <Explanation />
      <hr className="border-dashed border-border" />
      <TechStackSection />
      <hr className="border-dashed border-border" />
      <KeyBenefitsSection />
      <hr className="border-dashed border-border" />
      {/* <ReviewsSection /> */}
      <FounderSection />
      <hr className="border-dashed border-border" />
      <CTASection />
    </div>
  );
};

export default HomePage;
