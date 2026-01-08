import AnimationContainer from '../global/animation-container';

const Companies = () => {
  return (
    <div className="border-b border-border py-10">
      <AnimationContainer>
        <h2 className="text-lg font-medium font-heading text-muted-foreground text-center">
          Used by Developers From the Companies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-10 md:gap28 lg:gap32 mx-auto mt-8 md:max-w-screen-lg">
          <img
            src="/companies/stridon-logo.svg"
            alt="Stridon Logo"
            title="Stridon Logo"
            className="h-10 sm:h-11 w-auto"
          />
          <img
            src="/companies/quiddita-logo.svg"
            alt="Quiddita Logo"
            title="Quiddita Logo"
            className="h-10 sm:h-11 w-auto"
          />
          <img
            src="/companies/prodavnica-alata-logo.svg"
            alt="Prodavnica Alata Logo"
            title="Prodavnica Alata Logo"
            className="h-10 sm:h-11 w-auto"
          />
          <img
            src="/companies/sg-tools-logo.svg"
            alt="SG Tools Logo"
            title="SG Tools Logo"
            className="h-10 sm:h-11 w-auto"
          />
        </div>
      </AnimationContainer>
    </div>
  );
};

export default Companies;
