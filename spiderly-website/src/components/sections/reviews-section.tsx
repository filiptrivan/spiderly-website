import { AnimationContainer, MaxWidthWrapper } from '@/components';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import MagicCard from '@/components/ui/magic-card';
import { REVIEWS } from '@/utils/constants/misc';
import { StarIcon } from 'lucide-react';

export const ReviewsSection = () => {
  return (
    <MaxWidthWrapper className="py-10">
      <AnimationContainer delay={0.1}>
        <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
          <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
            What our users are saying
          </h2>
          <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
            Here&apos;s what some of our users have to say about Linkify.
          </p>
        </div>
      </AnimationContainer>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-4 md:gap-8 py-10">
        <div className="flex flex-col items-start h-min gap-6">
          {REVIEWS.slice(0, 3).map((review, index) => (
            <AnimationContainer delay={0.2 * index} key={index}>
              <MagicCard key={index} className="md:p-0">
                <Card className="flex flex-col w-full border-none h-min">
                  <CardHeader className="space-y-0">
                    <CardTitle className="text-lg font-medium text-muted-foreground">
                      {review.name}
                    </CardTitle>
                    <CardDescription>{review.username}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pb-4">
                    <p className="text-muted-foreground">{review.review}</p>
                  </CardContent>
                  <CardFooter className="w-full space-x-1 mt-auto">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </CardFooter>
                </Card>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
        <div className="flex flex-col items-start h-min gap-6">
          {REVIEWS.slice(3, 6).map((review, index) => (
            <AnimationContainer delay={0.2 * index} key={index}>
              <MagicCard key={index} className="md:p-0">
                <Card className="flex flex-col w-full border-none h-min">
                  <CardHeader className="space-y-0">
                    <CardTitle className="text-lg font-medium text-muted-foreground">
                      {review.name}
                    </CardTitle>
                    <CardDescription>{review.username}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pb-4">
                    <p className="text-muted-foreground">{review.review}</p>
                  </CardContent>
                  <CardFooter className="w-full space-x-1 mt-auto">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </CardFooter>
                </Card>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
        <div className="flex flex-col items-start h-min gap-6">
          {REVIEWS.slice(6, 9).map((review, index) => (
            <AnimationContainer delay={0.2 * index} key={index}>
              <MagicCard key={index} className="md:p-0">
                <Card className="flex flex-col w-full border-none h-min">
                  <CardHeader className="space-y-0">
                    <CardTitle className="text-lg font-medium text-muted-foreground">
                      {review.name}
                    </CardTitle>
                    <CardDescription>{review.username}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pb-4">
                    <p className="text-muted-foreground">{review.review}</p>
                  </CardContent>
                  <CardFooter className="w-full space-x-1 mt-auto">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </CardFooter>
                </Card>
              </MagicCard>
            </AnimationContainer>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
