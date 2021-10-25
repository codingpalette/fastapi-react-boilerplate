import React, { useState } from 'react';
import { Avatar, Button, Card, Modal } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import Header from '../../components/common/Header';
import MainTemplate from '../../components/templates/MainTemplate';
import { CartContentPage, CartHeader } from './styles';

const CartPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <MainTemplate>
        <Header title="상품관리" />

        <CartContentPage>
          <div className="header_box">
            <Button onClick={showModal}>상품등록</Button>
            <Modal title="상품등록" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>
          <div className="list_box">
            <Card style={{ width: '100%' }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} actions={[<SettingOutlined key="setting" />]}>
              <Meta title="Card title" description="This is the description" />
            </Card>
            <Card style={{ width: '100%' }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} actions={[<SettingOutlined key="setting" />]}>
              <Meta title="Card title" description="This is the description" />
            </Card>
            <Card style={{ width: '100%' }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} actions={[<SettingOutlined key="setting" />]}>
              <Meta title="Card title" description="This is the description" />
            </Card>
            <Card style={{ width: '100%' }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} actions={[<SettingOutlined key="setting" />]}>
              <Meta title="Card title" description="This is the description" />
            </Card>
            <Card style={{ width: '100%' }} cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />} actions={[<SettingOutlined key="setting" />]}>
              <Meta title="Card title" description="This is the description" />
            </Card>
          </div>
        </CartContentPage>
      </MainTemplate>
    </>
  );
};

export default CartPage;
