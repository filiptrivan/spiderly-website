import { HomepageSectionWrapper } from "./HomepageSectionWrapper";

export const GetStarted = () => (
  <>
    <HomepageSectionWrapper color="bg-gray-700">
      <div>
        <h2>
          <div className="text-3xl md:text-5xl font-bold py-1 inline-block text-wrap md:text-nowrap">
            Get Started
          </div>
        </h2>
        <div className="md:text-lg py-1 text-gray-400">
          Follow the instructions to use the Spiderly.
        </div>
      </div>
      <div >
{/* 1. Faster development
2. Less mistakes
3.  */}
      </div>
    </HomepageSectionWrapper>
  </>
);
