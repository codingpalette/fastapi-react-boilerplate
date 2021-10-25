import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import MainTemplate from '../../components/templates/MainTemplate';
import Header from '../../components/common/Header';
import useUsers from '../../hooks/useUsers';

const HomePage = () => {
  const { error } = useUsers();
  if (error) {
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
