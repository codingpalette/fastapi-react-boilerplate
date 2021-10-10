import React from 'react';
import { SectionContainer } from './styles';

export type SectionProps = {
  children: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
  return (
    <>
      <SectionContainer>
        <div className="section_content">{children}</div>
      </SectionContainer>
    </>
  );
};

export default Section;
