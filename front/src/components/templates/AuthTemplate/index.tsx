import React from 'react';
import { ColBox, ContentBox, LayoutBox, RowBox } from './styles';

export type AuthTemplateProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
};

const AuthTemplate = ({ children }: AuthTemplateProps) => {
  return (
    <>
      <LayoutBox>
        <ContentBox>
          <RowBox>
            <ColBox>
              {children}
              {/* <Footer /> */}
            </ColBox>
          </RowBox>
        </ContentBox>
      </LayoutBox>
    </>
  );
};

export default AuthTemplate;
