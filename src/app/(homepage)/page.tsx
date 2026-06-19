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
            .NET (C#) Web App Framework Built For{' '}
            <span className="text-transparent bg-linear-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-bloc">
              AI Coding Agents
            </span>
          </>
        }
        description="Spiderly is a free, 
        open-source .NET web app framework that lets your AI coding agent focus on business logic. 
        It generates a fully customizable .NET + Angular app from your EF Core model, 
        regenerating boilerplate on every model change. 
        Built on a production-tested architecture that stays clean and testable as your codebase grows."
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
