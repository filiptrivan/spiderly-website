export const SectionHeading = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="flex flex-col w-full items-center lg:items-center justify-center mb-8">
      <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground">
        {title}
      </h2>
      <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
        {description}
      </p>
    </div>
  );
};
