export const SectionHeadingWithoutDescription = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col w-full mb-8 lg:mb-10">
      <h2 className="text-3xl md:text-5xl leading-[1.1]! font-medium text-foreground">{title}</h2>
    </div>
  );
};
