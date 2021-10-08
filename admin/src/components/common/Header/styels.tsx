import styled from 'styled-components';
import { Button, Drawer, Layout } from 'antd';

const { Header } = Layout;

export const HeaderContainer = styled(Header)`
  background-color: #1890ff;
  height: 60px;
  line-height: 60px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  h1 {
    color: #fff;
    margin-bottom: 0;
  }
`;

export const MenuBox = styled.div`
  color: #fff;
  font-size: 25px;
  cursor: pointer;
  height: 100%;
`;

export const DrawerBox = styled(Drawer)`
  .ant-drawer-body {
    padding: 0;
  }
  .menu-list-box {
    margin-top: 0.5rem;
  }
`;

export const LinkBox = styled(Button)`
  color: #000;
  width: 100%;
  text-align: left;
  padding: 16px 24px;
  height: auto;
`;
