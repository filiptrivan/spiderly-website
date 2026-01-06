import { AnimationContainer, MaxWidthWrapper } from '@/components';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import { SectionHeadingWithoutDescription } from '../ui/section-heading-without-description';

export const FounderSection = () => {
  return (
    <MaxWidthWrapper>
      <AnimationContainer delay={0.1} className="relative">
        <Quote className="absolute -top-8 -left-4 md:-left-8 w-32 h-32 md:w-48 md:h-48 text-muted-foreground/10 -z-10 pointer-events-none" />
        <SectionHeadingWithoutDescription title="A Word from the Founder" />
      </AnimationContainer>

      <AnimationContainer delay={0.2}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          <div className="flex-1 space-y-4 md:space-y-5 text-base md:text-lg text-muted-foreground">
            <p>
              Through my work in companies and side projects, I saw the need for a tool to generate
              repetitive boilerplate code. The things I wrote over and over again caused me stress
              because I wasn&apos;t learning anything new. This was especially frustrating if I made
              a simple mistake during that manual work, or worse, had to do a code review for
              someone with a completely different writing style than mine.
            </p>

            <p>
              Spiderly is valuable in the era of LLMs like ChatGPT, Grok, and Claude because these
              tools still lack the ability to build deeply structured projects. Spiderly handles the
              big picture and helps by letting you isolate small chunks of specific business logic,
              for which you can then ask LLMs to assist you more effectively.
            </p>

            <p>
              Unlike most generators that are only useful at the beginning of a project, Spiderly
              allows you to work incrementally. You can evolve your models and application structure
              naturally over time without needing to know everything upfront.
            </p>

            <p>
              If you choose to use the Spiderly library, you have my full support. Just open an
              issue or start a discussion on GitHub, and I&apos;ll respond within a few hours.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="relative w-11 h-11">
                <Image
                  src="/filip-trivan-profile-photo.webp"
                  alt="Founder Filip Trivan Profile Picture"
                  fill
                  className="rounded-xl object-cover shadow-lg"
                  priority
                />
              </div>
              <div className="text-sm md:text-base">
                <p className="text-foreground mb-[2px]">Filip Trivan</p>
                <p>Founder & Creator of Spiderly</p>
              </div>
            </div>
          </div>
        </div>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};
