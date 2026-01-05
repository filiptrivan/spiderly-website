import { AnimationContainer, MaxWidthWrapper } from '@/components';
import MagicCard from '@/components/ui/magic-card';
import { REVIEWS } from '@/utils/constants/misc';
import Image from 'next/image';

export const ReviewsSection = () => {
  return (
    <MaxWidthWrapper className="py-10">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
          <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
            What our users are saying
          </h2>
          <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
            Here&apos;s what some of our users have to say about Spiderly.
          </p>
        </div>
      </AnimationContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 py-10">
        {REVIEWS.map((review, index) => (
          <MagicCard key={index}>
            <div className="flex flex-col h-[180px]">
              <div className="space-y-4 pb-4">
                <p>{review.review}</p>
              </div>
              <div className="mt-auto flex items-center gap-2">
                <Image src={'/noise.webp'} alt="" width={36} height={36} className="rounded-lg" />
                <div className="text-sm">
                  <div className="font-medium">{review.name}</div>
                  <div className="text-muted-foreground">{review.username}</div>
                </div>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};
