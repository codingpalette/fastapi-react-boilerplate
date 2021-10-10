import React, { useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import { Link, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { HomeOutlined, LogoutOutlined, MenuOutlined, SettingOutlined } from '@ant-design/icons';
import { message } from 'antd';
import { DrawerBox, HeaderContainer, LinkBox, MenuBox } from './styels';
import fetcher from '../../../utils/fetcher';
import logo from '../../../assets/images/logo.svg';

export type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const { data: userCheckData, error: userCheckError, mutate } = useSWR('/api/user/check', fetcher);
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token', 'refresh_token']);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const onClickLogOut = async () => {
    // 로그아웃 이벤트
    console.log('log out');
    try {
      const res = await axios.post('/api/user/logout');
      await removeCookie('access_token');
      await removeCookie('refresh_token');
      await mutate();
    } catch (e: any) {
      if (e.response?.data?.result === 'fail') {
        message.error(e.response.data.message);
      } else {
        message.error('서버에러가 발생했습니다');
      }
    }
  };

  return (
    <>
      <HeaderContainer>
        <div className="logo_box">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <h1>{title}</h1>

        <MenuBox onClick={showDrawer}>
          <MenuOutlined />
        </MenuBox>

        <DrawerBox title="메뉴" placement="right" onClose={onClose} visible={visible}>
          <div className="menu-list-box">
            <Link to="/">
              <LinkBox icon={<HomeOutlined />} type="text">
                메인
              </LinkBox>
            </Link>
            <Link to="/setting">
              <LinkBox icon={<SettingOutlined />} type="text">
                사이트 설정
              </LinkBox>
            </Link>

            <LinkBox icon={<LogoutOutlined />} type="text" onClick={onClickLogOut}>
              로그아웃
            </LinkBox>
          </div>
        </DrawerBox>
      </HeaderContainer>
    </>
  );
};

export default Header;
