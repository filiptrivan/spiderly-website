import { SectionHeadingWithoutDescription } from '@/components/ui/section-heading-without-description';
import AnimationContainer from '../../global/animation-container';
import { SectionContainer } from '../../global/section-container';
import { ExplanationInteractive } from './ExplanationInteractive';
import { Step01TextContent } from './Step01TextContent';

export const Explanation = () => {
  return (
    <SectionContainer>
      <AnimationContainer>
        <SectionHeadingWithoutDescription title="How Does Spiderly Work?" />
        <Step01TextContent />
        <ExplanationInteractive />
      </AnimationContainer>
    </SectionContainer>
  );
};
