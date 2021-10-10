import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import useSWR from 'swr';
import fetcher from '../../utils/fetcher';
import MainTemplate from '../../components/templates/MainTemplate';
import Header from '../../components/common/Header';

const HomePage = () => {
  const { data: userCheckData, error: userCheckError, mutate } = useSWR('/api/user/check', fetcher);
  if (userCheckError) {
    return <Redirect to="/auth" />;
  }
  return (
    <>
      <MainTemplate>
        <Header title="Home" />
        <div>HomePage</div>
        <Button type="primary">Primary Button</Button>
        <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
      </MainTemplate>
    </>
  );
};

export default HomePage;
