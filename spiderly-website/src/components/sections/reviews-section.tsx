import { AnimationContainer, MaxWidthWrapper } from '@/components';
import { SectionHeading } from '@/components/ui/section-heading';
import { REVIEWS } from '@/utils/constants/misc';
import Image from 'next/image';

export const ReviewsSection = () => {
  return (
    <MaxWidthWrapper>
      <AnimationContainer delay={0.1}>
        <SectionHeading
          title="What our users are saying"
          description="Here's what some of our users have to say about Spiderly."
        />
      </AnimationContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-border gap-[1px]">
        {REVIEWS.map((review, index) => (
          <div key={index} className="flex flex-col h-[220px] px-2 md:px-4 py-4 bg-background ">
            <p>{review.review}</p>

            <div className="mt-auto flex items-center gap-2">
              <Image src={review.avatar} alt="" width={36} height={36} className="rounded-lg" />
              <div className="text-sm">
                <div className="font-medium">{review.name}</div>
                <div className="text-muted-foreground">{review.username}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};
