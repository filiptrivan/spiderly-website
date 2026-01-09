import { AnimationContainer } from '@/components';
import { TextHoverEffect } from '@/components/ui/text-hover-effect';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
      <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

      <AnimationContainer>
        <div className="grid-cols-2 gap-8 grid xl:col-span-2 py-14">
          <div className="md:grid md:grid-cols-2">
            <div>
              <h3 className="text-base font-medium text-white">Product</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link
                    href="/#features"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Features
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-base font-medium text-white">Resources</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="">
                  <Link href="" className="hover:text-foreground transition-all duration-300">
                    Docs
                  </Link>
                </li>
                <li className="mt-2">
                  <Link href="/faq" className="hover:text-foreground transition-all duration-300">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="">
              <h3 className="text-base font-medium text-white">Legal</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="mt-2">
                  <Link href="/" className="hover:text-foreground transition-all duration-300">
                    Terms of Service
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/resources/help"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0 flex flex-col">
              <h3 className="text-base font-medium text-white">Socials</h3>
              <ul className="mt-4 text-sm text-muted-foreground">
                <li className="">
                  <Link href="" className="hover:text-foreground transition-all duration-300">
                    Twitter
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    href="/privacy"
                    className="hover:text-foreground transition-all duration-300"
                  >
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
          <p className="text-sm text-muted-foreground mt-8 md:mt-0">
            &copy; {new Date().getFullYear()} Spiderly
          </p>
        </div>

        <div className="h-80 lg:h-80 hidden md:flex items-center justify-center">
          <TextHoverEffect text="SPIDERLY" />
        </div>
      </AnimationContainer>
    </footer>
  );
};

export default Footer;
