export const Step02TextContent = () => {
  return (
    <>
      <h3 className="mb-3 lg:mb-5 md:text-3xl text-xl font-medium">02. Define Your Class</h3>
      <p className="mb-2 lg:mb-4 text-muted-foreground">
        Simply define your EF Core entities using properties and attributes. Spiderly's code
        generator reads those and automatically produces a complete CRUD stack for each entity,
        including UI pages, service-layer database logic, API controllers and corresponding strongly
        typed Angular API client.
      </p>
      <p className="mb-2 lg:mb-4 text-muted-foreground">
        The generator also creates .NET FluentValidation validation rules and matching Angular
        reactive form validators, along with C# DTOs and corresponding TypeScript classes.
      </p>
      <p className="mb-2 lg:mb-4 text-muted-foreground">
        Built on C# Source Generators, Spiderly runs incrementally on file save for entities within
        the configured namespace, providing instant generation without slowing down your build by
        regenerating everything at once.
      </p>
      <p className="mb-6 lg:mb-8 text-muted-foreground">
        Generated code uses the Template Method pattern, so everything generated is easy to
        customize.
      </p>
    </>
  );
};
