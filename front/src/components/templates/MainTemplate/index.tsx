import React from 'react';
import { Layout } from 'antd';
import { LayoutContainer } from './styles';
import Header from '../../common/Header';

const { Content } = Layout;

export type MainTemplateProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
};

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <LayoutContainer>
        <Header title="Home" />
        <Content>{children}</Content>
      </LayoutContainer>
    </>
  );
};

export default MainTemplate;
