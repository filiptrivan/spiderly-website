import { AnimationContainer, MaxWidthWrapper } from '@/components';
import { HeroSection } from '@/components/sections';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQ } from '@/utils/constants/faq';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Spiderly FAQ',
  description:
    'Find answers to common questions about Spiderly. Our FAQ covers pricing, comparisons, OS support, tech stack, code generation scope, prerequisites, installation guide, and more.',
};

const FAQPage = () => {
  return (
    <div className="mb-3">
      <HeroSection
        title="Frequently Asked Questions"
        description="Find answers to common questions about Spiderly. Our FAQ covers pricing, comparisons, OS support, tech stack, code generation scope, prerequisites, installation guide, and more."
      />

      <MaxWidthWrapper>
        <AnimationContainer>
          <div className="max-w-3xl mx-auto w-full">
            <Accordion type="single" collapsible>
              {FAQ.map((faq, index) => (
                <AccordionItem key={index} value={index.toString()}>
                  <AccordionTrigger className="text-white hover:text-muted-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      {faq.answer && (
                        <p className="text-muted-foreground">
                          {faq.answer}{' '}
                          {faq.link && (
                            <Link
                              href={faq.link}
                              className="text-primary hover:underline"
                              {...(faq.externalLink
                                ? { target: '_blank', rel: 'noopener noreferrer' }
                                : {})}
                            >
                              {faq.linkText}
                            </Link>
                          )}
                        </p>
                      )}

                      {faq.sections && (
                        <div className="space-y-4">
                          {faq.sections.map((section, idx) => (
                            <div key={idx}>
                              <h4 className="font-semibold mb-2">{section.title}</h4>
                              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                                {section.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {faq.table && (
                        <div className="overflow-x-auto mt-4">
                          <table className="w-full border-collapse border border-border">
                            <thead>
                              <tr className="bg-muted/50">
                                {faq.table.headers.map((header, idx) => (
                                  <th
                                    key={idx}
                                    className="border border-border px-4 py-2 text-left font-semibold"
                                  >
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {faq.table.rows.map((row, idx) => (
                                <tr key={idx} className="hover:bg-muted/30">
                                  <td className="border border-border px-4 py-2 font-medium">
                                    {row.feature}
                                  </td>
                                  <td className="border border-border px-4 py-2 text-muted-foreground">
                                    {row.spiderly}
                                  </td>
                                  <td className="border border-border px-4 py-2 text-muted-foreground">
                                    {row.competitor}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>
    </div>
  );
};

export default FAQPage;
