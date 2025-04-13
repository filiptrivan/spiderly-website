import { HomepageSectionWrapper } from "./HomepageSectionWrapper";

const cliMessages = [
  "spiderly init",
  "App name without spaces: SpiderlyTestApp",
  "Template type (blank/loyalty/invertory management): blank",
  "Basic app structure created, now you can use Spiderly to generate the rest of the app!",
];

export const Hero = () => (
  <HomepageSectionWrapper color="bg-gray-900">
    <div className="pb-6 pr-6">
      <h1>
        <div className="text-5xl md:text-7xl font-bold py-1 inline-block text-wrap md:text-nowrap bg-gradient-to-r from-pink-600 to-yellow-300 text-transparent bg-clip-text">
          Build Apps.
        </div>
        <div className="text-5xl md:text-7xl font-bold py-1 mb-2">Fast.</div>
      </h1>
      <div className="text-lg md:text-xl py-1 text-gray-400">
        From diagram to application in minutes. No more boring code, focus only
        on specific logic. Generate the entire frontend and backend from C# .NET
        classes, with full control and customization.
      </div>
    </div>
    <div className="w-full bg-linear-to-br from-50% to-pink-900 pb-6 pr-6 rounded-lg">
      <div
        className="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-300 text-sm font-mono subpixel-antialiased 
                        bg-gray-800 pb-6 rounded-lg leading-normal overflow-hidden"
      >
        <div className="top mb-2 flex">
          <div className="h-3 w-3 bg-pink-500 rounded-full"></div>
          <div className="ml-2 h-3 w-3 bg-yellow-300 rounded-full"></div>
          <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
        </div>
        {cliMessages.map((msg, index) => (
          <div key={index} className="mt-4 flex">
            <span className="text-pink-400">$</span>
            <p className="flex-1 typing items-center pl-2">
              {msg}
              <br />
            </p>
          </div>
        ))}
      </div>
    </div>
  </HomepageSectionWrapper>
);
