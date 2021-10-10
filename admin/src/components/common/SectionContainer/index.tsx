import React from 'react';
import { SectionBox } from './styles';

export type SectionContainerProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
};

const SectionContainer = ({ children }: SectionContainerProps) => {
  return (
    <>
      <SectionBox>{children}</SectionBox>
    </>
  );
};

export default SectionContainer;
