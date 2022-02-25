import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Zoltan Berente's Portfolio
      </SectionTitle>
      <SectionText>
        This is a next.js tutorial project from JavaScript Mastery. The first time I'm using
        next.js, also getting more familiar with styled components.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            'https://www.youtube.com/watch?v=OPaLnMw2i_0&ab_channel=JavaScriptMastery')
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
