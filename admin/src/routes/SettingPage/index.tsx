import React from 'react';
import { Button, Card, Form, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import useSWR from 'swr';
import { Redirect } from 'react-router-dom';
import MainTemplate from '../../components/templates/MainTemplate';
import Header from '../../components/common/Header';
import fetcher from '../../utils/fetcher';
import SectionContainer from '../../components/common/SectionContainer';

const SettingPage = () => {
  const { data: userCheckData, error: userCheckError, mutate } = useSWR('/api/user/check', fetcher);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  if (userCheckError) {
    return <Redirect to="/auth" />;
  }
  return (
    <>
      <MainTemplate>
        <Header title="Setting" />
        <SectionContainer>
          <Card title="스킨 선택">
            <Form name="basic" onFinish={onFinish}>
              <Form.Item name="radio-group">
                <Radio.Group>
                  <Card type="inner" title="Inner Card title">
                    Inner Card content
                    <Radio value="a">선택1</Radio>
                  </Card>
                  <Card type="inner" title="Inner Card title">
                    Inner Card content
                    <Radio value="b">선택2</Radio>
                  </Card>
                </Radio.Group>
              </Form.Item>
            </Form>
          </Card>
          ,
        </SectionContainer>
      </MainTemplate>
    </>
  );
};

export default SettingPage;
