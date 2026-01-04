import Image from 'next/image';
import AnimationContainer from '../global/animation-container';

const Companies = () => {
  return (
    <div className="border-b border-t border-border py-10">
      <AnimationContainer>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg font-medium font-heading text-muted-foreground">
            Used by Developers From the Companies
          </h2>
        </div>
      </AnimationContainer>

      <AnimationContainer delay={0.1}>
        <div className="flex flex-row flex-wrap items-center justify-center gap-24 md:gap-28 lg:gap-32 mx-auto mt-8 text-muted-foreground transition-all">
          <Image
            src={'/companies/stridon-logo.svg'}
            width={100}
            height={100}
            alt=""
            className="h-11 w-auto"
          />
          <Image
            src={'/companies/quiddita-logo.svg'}
            width={50}
            height={50}
            alt=""
            className="h-11 w-auto"
          />
          <Image
            src={'/companies/prodavnica-alata-logo.svg'}
            width={50}
            height={50}
            alt=""
            className="h-11 w-auto"
          />
          <Image
            src={'/companies/sg-tools-logo.svg'}
            width={50}
            height={50}
            alt=""
            className="h-11 w-auto"
          />
        </div>
      </AnimationContainer>
    </div>
  );
};

export default Companies;
